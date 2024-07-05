interface TotalBalanceProps {
  totalBalance: number;
}

export const TotalBalance = ({ totalBalance }: TotalBalanceProps) => {
  return (
    <div className="font-bold mt-5">
      <h4>Current Balance</h4>
      <h1 className="text-2xl text-black">US ${totalBalance.toFixed(2)}</h1>
    </div>
  );
};
