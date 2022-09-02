import useModalDOM from '../helpers/hooks/useModalDOM';
import useScrollAnchor from '../helpers/hooks/useScrollAnchor';
import useScrollToTop from '../helpers/hooks/userScrollToTop';
export default function Documents({ children }) {
	useModalDOM();
	useScrollAnchor();
	useScrollToTop();
	return children;
}
