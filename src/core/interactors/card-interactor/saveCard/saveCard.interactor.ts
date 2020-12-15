import { CREATED_STAT } from '../../../../../config/constant';
import { DatadogNotifier } from '../../../../dataSources/datadog.datasource';
import { GoogleNotifier } from '../../../../dataSources/google.datasource';
import Card from '../../../entities/Card';
import CardRepository from '../../../repositories/card.repository';

const saveCard = (
  cardRepository: CardRepository,
  dataDogRepository: DatadogNotifier,
  googleRepository: GoogleNotifier,
) => async (card: Card): Promise<Card> => {
  const cardSaved = await cardRepository.saveCard(card);
  dataDogRepository.send(card, CREATED_STAT);
  googleRepository.send(card, CREATED_STAT);
  return cardSaved;
};

export default saveCard;
