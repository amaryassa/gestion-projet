import { User } from './User.model';
export class Tache {
  constructor(
    public id: string,
    public nomTache: string,
    public descriptionTache: string,
    public createdBy: string,
    public destination: string
  ) {}
}
