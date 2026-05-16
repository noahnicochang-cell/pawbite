export type Vet = {
  slug: string;
  name: string;
  credentials: string;
  bio: string;
  specialty: string;
};

export const vets: Vet[] = [
  {
    slug: 'm-hayes',
    name: 'Dr. M. Hayes, DVM',
    credentials: 'Board-certified veterinary nutritionist',
    bio: 'Dr. Hayes is a placeholder vet reviewer for pre-launch content. Real advisory board members will be named here once contracts are finalized.',
    specialty: 'Veterinary nutrition, gut microbiome, geriatric care',
  },
];

export const defaultVet = vets[0];
export const defaultAuthor = 'PawBite editorial team';
