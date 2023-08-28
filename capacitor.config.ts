import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'Little Lemon',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
