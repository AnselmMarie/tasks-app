import { PropsWithChildren, ReactElement } from 'react';

import { Card } from 'tamagui';

import { CardProps } from './card.interface';

const CardView = ({
  header = null,
  footer = null,
  background = null,
  children,
  ...props
}: PropsWithChildren<CardProps>): ReactElement => {
  return (
    <Card {...props} borderRadius="$2">
      {header ? <Card.Header padded>{header}</Card.Header> : null}
      {footer ? <Card.Footer padded>{footer}</Card.Footer> : null}
      {children}
      {background ? <Card.Background>{background}</Card.Background> : null}
    </Card>
  );
};

export default CardView;
