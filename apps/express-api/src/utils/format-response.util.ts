import {
  ErrorMessagesInter,
  authMessage,
  generalMessage,
  userMessage,
  userTokenMessage,
} from '../config/messages/error';

/**
 * @desc create an general error object
 */
export const generateManualError = async (errorCode: string, messageType: any) => {
  const jsonMessage = getResponseMessage(errorCode, messageType);
  const errObj: Partial<ErrorMessagesInter> = {
    errorCode,
    errorTime: new Date(),
  };

  if (jsonMessage && jsonMessage.message) {
    errObj.status = jsonMessage.status || 500;
    errObj.message = jsonMessage.message;
    errObj.errorType = jsonMessage.errorType;
  } else {
    errObj.status = 500;
    errObj.errorCode = '0143685';
    errObj.message = generalMessage['0143685'].message;
    errObj.errorType = generalMessage['0143685'].errorType;
  }

  return errObj;
};

/**
 * @desc generates an general database error
 */
export const generateDatabaseError = async (): Promise<Partial<ErrorMessagesInter>> => {
  const errObj: Partial<ErrorMessagesInter> = {
    errorCode: '',
    errorTime: new Date(),
  };

  errObj.status = 500;
  errObj.errorCode = '9999966';
  errObj.message = generalMessage['9999966'].message;
  errObj.errorType = generalMessage['9999966'].errorType;

  return errObj;
};

/**
 * @desc return an error object based on the arguments passed
 */
const getResponseMessage = (errCode: string, messageType: string): any => {
  let results;

  switch (messageType) {
    case 'AUTH':
      results = authMessage[errCode as keyof typeof authMessage];
      break;
    case 'USER':
      results = userMessage[errCode as keyof typeof userMessage];
      break;
    case 'USER-TOKEN':
      results = userTokenMessage[errCode as keyof typeof userTokenMessage];
      break;
    default:
      results = generalMessage[errCode as keyof typeof generalMessage];
      break;
  }

  return results;
};
