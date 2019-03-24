import { User } from './User.model';
export class Tache {
  constructor(
    public id: string,
    public nomTache: string,
    public descriptionTache: string,
    public usersEnCharge: User[],
    public typeTache: string,
    public prioriteTache: string,
    public createdBy: User,
    public statut: string,
    public progress: number,

  ) {}
}
