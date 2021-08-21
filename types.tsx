import React from "react";

/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  ContactsScreen: undefined;
  ChatRoom: undefined;
  Registration: undefined;
  Login: undefined;
  LandingPage: undefined;
  ProfileScreen: undefined;
  EditProfileScreen: undefined;
  PasswordReset: undefined;
  GetEmail: undefined;
};

export type MainTabParamList = {
  Camera: undefined;
  Chats: undefined;
  Calls: undefined;
  Status: undefined;
};

export type ChatParamList = {
  ChatScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type Message = {
  id: String;
  content: String;
  createdAt: String;
  user: User;
};

export type ChatRoom = {
  id: String;
  users: User[];
  lastMessage: Message;
};

export type LoginParams = {
  isSubmitting: boolean;
  authInfo: any;
  navigation: any;
  setIsSubmitting: React.Dispatch<React.SetStateAction<boolean>>;
  setServerErrors: React.Dispatch<React.SetStateAction<string[]>>;
};

export type ProfileParams = {
  profile: User;
  isSubmitting: boolean;
  setIsSubmitting: React.Dispatch<React.SetStateAction<boolean>>;
};

export type LogoutParams = {
  isSubmitting: boolean;
  navigation: any;
  setIsSubmitting: React.Dispatch<React.SetStateAction<boolean>>;
};

export type User = any;
