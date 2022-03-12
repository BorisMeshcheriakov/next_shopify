export type MutationHookContext = {
	fetch: (input: any) => any;
};

export type MutationHook = {
	fetcher: (input: any) => void;
	useHook(context: MutationHookContext): (input: any) => any;
};
