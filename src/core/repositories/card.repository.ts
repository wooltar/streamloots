import Card from '../entities/Card';

interface CardRepository {
  getCardById(id: string): Promise<Card>;
  getCardByUser(userId: string): Promise<Card[]>;
  getPublishedCardsOfUser(userId: string): Promise<Card[]>;
  updateCard(card: Card): Promise<Card>;
  saveCard(card: Card): Promise<Card>;
  publish(card: Card): Promise<Card>;
  unpublish(card: Card): Promise<Card>;
  getCards(): Promise<Card[]>;
}
export default CardRepository;
