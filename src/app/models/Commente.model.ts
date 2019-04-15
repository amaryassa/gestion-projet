import { User } from './User.model';

export class Commente {
  constructor(
    public id: string,
    public commenter: User,
    public contentComment: string,
    public dateCommente: Date,

  ) {}
}
