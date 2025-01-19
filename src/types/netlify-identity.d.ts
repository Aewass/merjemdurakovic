interface NetlifyIdentity {
  on: (event: string, callback: (user?: any) => void) => void;
  open: (command?: string) => void;
  close: () => void;
}

interface Window {
  netlifyIdentity: NetlifyIdentity;
}
