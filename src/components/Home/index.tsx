import { useContext, useEffect, useState } from "react";
import { TransactionContext } from "../../context/TransactionContext";
import { Dashboard } from "../Dashboard";
import { Header } from "../Header";
import { TransactionModal } from "../TransactionModal";

export function Home() {
  const { getTransactions } = useContext(TransactionContext);

  const [isTransactionModalOpen, setIsTransactionModalOpen] =
    useState<boolean>(false);

  function handleOpenTransactionModal() {
    setIsTransactionModalOpen(true);
  }

  function handleCloseTransactionModal() {
    setIsTransactionModalOpen(false);
  }

  useEffect(() => {
    async function fetchTransactions() {
      await getTransactions();
    }

    fetchTransactions();
  }, []);

  return (
    <>
      <Header onOpenTransactionModal={handleOpenTransactionModal} />
      <Dashboard />
      <TransactionModal
        isOpen={isTransactionModalOpen}
        onClose={handleCloseTransactionModal}
      />
    </>
  );
}
