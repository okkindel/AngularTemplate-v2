import { Role } from '@tmp-shared/enums';

export interface User {
  email: string;
  name: string;
  role: Role;
  id: string;
}
