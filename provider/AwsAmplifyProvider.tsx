'use client';
import { ReactNode } from "react";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import outputs from "@/amplify_outputs.json";
import { Amplify } from "aws-amplify";

Amplify.configure(outputs);

const AwsAmplifyProvider = ({ children }: { children: ReactNode }) => {
  return <Authenticator>{ children }</Authenticator>;
};

export default AwsAmplifyProvider;
