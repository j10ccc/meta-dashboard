export interface ProxyNode {
  alive: boolean;
  // TODO:
  extra: any;
  history: Array<{ delay: number; time: string; }>;
  id: string;
  name: string;
  tfo: boolean;
  udp: boolean;
  xudp: boolean;
}

enum ProxyNodeType {
  // Note: Change name
  Proxy = "Proxy",
  Selector = "Selector",
  Trojan = "Trojan"
  // Compatible = "Compatible",
  // Direct = "Direct",
  // PASS = "PASS",
}

export interface ProxyProvider {
  expectedStatus: string;
  name: string;
  proxies: ProxySelector[];
  subscriptionInfo: {
    Upload: number;
    Download: number;
    Total: number;
    Expire: number;
  };
  testUrl: string;
  type: ProxyNodeType.Proxy;
  updateAt: string;
  vehicleTye: string;
}

/**
 * Proxy Selector
 *
 * Entity in frontend, aligning with field in meta config
 */
export type ProxyGroup = ProxySelector;

export interface ProxySelector extends ProxyNode {
  /** All name of nodes */
  all: string[];
  /** Name of current node */
  now: string;
  type: ProxyNodeType.Selector;
}

export interface ProxyTrojan extends ProxyNode {
  type: ProxyNodeType.Trojan;
}
