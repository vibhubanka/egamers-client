import * as React from 'react';
import Responsive from 'react-responsive';
import { sm } from 'utils/styles/breakpoints';

export const Mobile: React.FC = props => <Responsive {...props} maxWidth={sm} />;
