import HeavyCalculation from "../components/HeavyCalculation";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function UseMemoPage() {
    useDocumentTitle('useMemo');
  
  return (
    <>
    <h1>UseMemo - heavyCalculation</h1>
    <HeavyCalculation />
    </>
  )
}
