export function getDecoratedComponent(instanceRef: React.RefObject<any>) {
	const currentRef = instanceRef.current
	if (currentRef == null) {
		return null
	} else if (typeof currentRef.getDecoratedComponentInstance === 'function') {
		return currentRef.getDecoratedComponentInstance()
	} else {
		return currentRef
	}
}
