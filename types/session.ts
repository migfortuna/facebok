import { DefaultSession } from "next-auth";

export interface UserSession {
  data: DefaultSession | null | undefined;
  status: string;
}
