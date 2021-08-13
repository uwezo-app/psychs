import React from "react";

import Context, {defaultUser} from "./context";
import { LoginParams, ProfileParams, LogoutParams} from "../../types"

type Props = {
    children: JSX.Element | JSX.Element[]
}

export default class GlobalState extends React.Component<Props, {}> {
    state = {
        user: defaultUser,
        token: ""
    }

    login = async (param: LoginParams) => {
        if (!param.isSubmitting) {
            param.setIsSubmitting(true);
            param.setServerErrors([]);

            const response = await fetch(
                `https://uwezoapp-321219.el.r.appspot.com/login`, {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",
                        Accept: "application/json"
                    },
                    body: JSON.stringify(param.authInfo),
                }
            );

            if (response.ok && response.status === 200) {
                const user = await response.json();
                this.setState({...this.state, user: user.User})
                this.setState({...this.state, token: user.Token})
                param.navigation.navigate('Root');
            } else {
                console.log(response.statusText);
            }
        }
        param.setIsSubmitting(false);
    }

    logout = async ({isSubmitting, setIsSubmitting, navigation}: LogoutParams) => {
        if(!isSubmitting){
            setIsSubmitting(true);
            const response = await fetch(
              "https://uwezoapp-321219.el.r.appspot.com/logout",
              {
                method: "GET",
                headers: {
                  Authorization: "Bearer " + this.state.token,
                },
              }
            );

            if (response.ok && response.status === 200){
                await response.json();
                this.setState({user: {}, token: ""});
                navigation.navigate("LandingPage");
            } else {
                console.log(response.statusText);
            }
        }
    }

    updateUser = async ({profile, isSubmitting, setIsSubmitting}: ProfileParams) => {
        if(!isSubmitting) {
            setIsSubmitting(true);

            const response = await fetch(
              `https://uwezoapp-321219.el.r.appspot.com/psychologist/profile/${this.state.user.Email}`,
              {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                  Accept: "application/json",
                  Authorization: `Bearer ${this.state.token}`,
                },
                body: JSON.stringify(profile),
              }
            );

            if (response.status === 200 && response.ok) {
                await response.json();
            } else {
                console.log(response.statusText)
            }
        }
    }

    render() {
        return (
            <Context.Provider value={{
                Token: this.state.token,
                User: this.state.user,
                login: this.login,
                logout: this.logout,
                updateUser: this.updateUser,
            }}>
                {this.props.children}
            </Context.Provider>
        )
    }
}
