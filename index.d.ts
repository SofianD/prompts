export interface Choice {
  value: any;
  label: string;
  description?: string;
}

export interface SelectOptions {
  choices: (Choice | string)[];
  maxVisible?: number;
  ignoreValues?: (string | number | boolean)[];
}

export interface ConfirmOptions {
  initial?: boolean;
}

export function prompt(message: string): Promise<string>;
export function select(message: string, options: SelectOptions): Promise<string>;
export function confirm(message: string, options?: ConfirmOptions): Promise<string>;
