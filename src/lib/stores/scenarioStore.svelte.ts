let scenarios = $state<Record<number, object>>({});

export function setScenario(order: number, data: object) {
	scenarios[order] = data;
}

export function getScenario(order: number) {
	return scenarios[order];
}

export { scenarios };
