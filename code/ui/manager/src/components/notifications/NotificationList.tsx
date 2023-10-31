import type { FC } from 'react';
import React from 'react';
import type { State } from '@storybook/manager-api';
import { styled } from '@storybook/theming';
import type { CSSObject } from '@storybook/theming';
import NotificationItem from './NotificationItem';
import { MEDIA_DESKTOP_BREAKPOINT } from '../../constants';

interface NotificationListProps {
  notifications: State['notifications'];
  clearNotification: (id: string) => void;
}

export const NotificationList: FC<NotificationListProps> = ({
  notifications,
  clearNotification,
}) => {
  return (
    <List>
      {notifications &&
        notifications.map((notification) => (
          <NotificationItem
            key={notification.id}
            onDismissNotification={(id: string) => clearNotification(id)}
            notification={notification}
          />
        ))}
    </List>
  );
};

const List = styled.div<{ placement?: CSSObject }>({
  zIndex: 200,
  position: 'fixed',
  left: 20,
  bottom: 60,
  maxHeight: 'calc(100vh - 40px)',
  overflowY: 'scroll',

  [MEDIA_DESKTOP_BREAKPOINT]: {
    bottom: 20,
  },

  '> * + *': {
    marginTop: 10,
  },

  '&:empty': {
    display: 'none',
  },
});
