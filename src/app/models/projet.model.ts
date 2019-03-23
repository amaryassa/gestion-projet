import { Tache } from './tache.model';
import {User} from './User.model';
export class Projet {
  constructor(
    public id: string,
    public nomProjet: string,
    public descriptionProjet: string,
    public createdBy: User,
    public taches: Tache[]
  ) {

  }


   /*  id: string;
    nomProjet: string;
    descriptionProjet: string;
    createdBy: User; */
}
