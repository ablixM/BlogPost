export interface DetailPost {
  results: [
    {
      id: string;
      title: string;
      description: string;
      images: string[];
      authorId: number;
      createdAt: string;
      updatedAt: string;
      categories: string;
    }
  ];
}
