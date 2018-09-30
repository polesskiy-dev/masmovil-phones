import connect from 'react-redux/es/connect/connect';
import { createSelector } from 'reselect';
import { IntlProvider } from 'react-intl';
import { getLanguage } from '../../../selectors/language.selector';
import messages_es from '../../../translations/es';
import messages_en from '../../../translations/en';

const messages = {
  es: messages_es,
  en: messages_en,
};

const ConnectedIntlProvider = connect(
  createSelector(getLanguage, language => ({
    locale: language,
    messages: messages[language],
  }))
)(IntlProvider);

export default ConnectedIntlProvider;
