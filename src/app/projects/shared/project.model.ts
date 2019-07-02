export class Project {
  id: number;
  name: string;
  description: string;
  editing: boolean;
  imageUrl = 'https://placeimg.com/500/300/arch/1';
  contractTypeId: number;
  isActive: boolean;
  contractSignedOn: Date;
  budget: number;
}
