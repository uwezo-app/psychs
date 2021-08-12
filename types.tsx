/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  ContactsScreen:undefined;
  ChatRoom:undefined;
  Registration:undefined;
  Login:undefined;
  LandingPage:undefined;
  ProfileScreen:undefined;
  EditProfileScreen:undefined;
  PasswordReset:undefined;
  GetEmail:undefined;
};

export type MainTabParamList = {
  Camera: undefined;
  Chats: undefined;
  Calls: undefined;
  Status:undefined;
};

export type ChatParamList = {
  ChatScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type User={
  id:String;
  name:String;
  imageUri:String;
  status:String;
}

export type Message={
  id: String;
  content:String;
  createdAt: String;
  user:User;
}

export type ChatRoom={
  id:String;
  users: User[];
 lastMessage:Message
}
