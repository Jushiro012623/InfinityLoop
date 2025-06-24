export interface PageMeta {
  path: string;
  title: string;
  description: string;
}

export const pageMetaList: PageMeta[] = [
  {
    path: '/',
    title: 'Overview',
    description: 'Get a quick summary of your skills exchange activity.',
  },
  {
    path: '/profile',
    title: 'Profile',
    description: 'View and edit your personal profile and skill offerings.',
  },
  {
    path: '/settings',
    title: 'Settings',
    description: 'Manage your account, preferences, and notification settings.',
  },
  {
    path: '/messages',
    title: 'Messages',
    description: 'Chat with other users and manage your conversations.',
  },
  {
    path: '/reputation',
    title: 'Reputation',
    description: 'Check your reviews and feedback from other users.',
  },
  {
    path: '/trades',
    title: 'Trades',
    description: 'View and manage your trade requests and transactions.',
  },
  {
    path: '/trade-status',
    title: 'Trade Status',
    description: 'Track the status of your ongoing or past trades.',
  },
  {
    path: '/skills',
    title: 'Skills',
    description: 'Browse, search, and manage available skills to exchange.',
  },
  {
    path: '/login',
    title: 'Login',
    description: 'Access your account to start exchanging skills.',
  },
  {
    path: '/register',
    title: 'Register',
    description: 'Create an account to join the skills exchange community.',
  },
  {
    path: '/forgot-password',
    title: 'Forgot Password',
    description: 'Reset your password if you’ve forgotten your credentials.',
  },
  {
    path: '/update-password',
    title: 'Update Password',
    description: 'Choose a new password to secure your account.',
  },
];