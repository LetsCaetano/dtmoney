import { Box, Stack } from '@mui/material';
import MaterialReactTable, { MRT_ColumnDef } from 'material-react-table';
import { useMemo } from 'react';
import { useTransactions } from "../../hooks/useTransactions";
import { Container } from './styles';
// import { data } from './makeData';

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    group: string;
    paymentForm: string;
    paymentStatus: string;
    paymentDate: string;
    notify: string;
    createdAt: string;
}

export function TransactionTable() {
    const { transactions } = useTransactions();

    const averageAmount = useMemo(
        () => transactions.reduce((acc, curr) => acc + curr.amount, 0) / transactions.length,
        [transactions],
    );

    const columns = useMemo<MRT_ColumnDef<Transaction>[]>(
        () => [
          {
            header: 'Title',
            accessorKey: 'title',
            enableGrouping: false, //do not let this column be grouped
          },
          {
            header: 'Category',
            accessorKey: 'category',
          },
          {
            header: 'Date',
            accessorKey: 'createdAt',
            GroupedCell: ({ cell, row }) => (
              <Box sx={{ color: 'primary.main' }}>
                <strong>{cell.getValue<string>()}s </strong> ({row.subRows?.length})
              </Box>
            ),
          },
          {
            header: 'Value',
            accessorKey: 'amount',
            aggregationFn: 'mean',
            //required to render an aggregated cell, show the average salary in the group
            AggregatedCell: ({ cell, table }) => (
              <>
                Average by{' '}
                {table.getColumn(cell.row.groupingColumnId ?? '').columnDef.header}:{' '}
                <Box sx={{ color: 'success.main', fontWeight: 'bold' }}>
                  {cell.getValue<number>()?.toLocaleString?.('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  })}
                </Box>
              </>
            ),
            //customize normal cell render on normal non-aggregated rows
            Cell: ({ cell }) => (
              <>
                {cell.getValue<number>()?.toLocaleString?.('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}
              </>
            ),
            Footer: () => (
              <Stack>
                Average Amount:
                <Box color="warning.main">
                  {averageAmount?.toLocaleString?.('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  })}
                </Box>
              </Stack>
            ),
          },
        ],
        [averageAmount],
      );

    return (
        // <Container>
        //     <table>
        //         <thead>
        //             <tr>
        //                 <th>Título</th>
        //                 <th>Valor</th>
        //                 <th>Categoria</th>
        //                 <th>Data</th>
        //             </tr>
        //         </thead>
        //         <tbody>
        //             {transactions.map(transaction => (
        //                 <tr key={transaction.id}>
        //                     <td>{transaction.title}</td>
        //                     <td className={transaction.type}>
        //                         {/* Formato moeda */}
        //                         {new Intl.NumberFormat('pt-BR', {
        //                             style: 'currency',
        //                             currency: 'BRL'
        //                         }).format(transaction.amount)}
        //                     </td>
        //                     <td>{transaction.category}</td>
        //                     <td>
        //                         {new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt))}
        //                     </td>
        //                 </tr>
        //             ))}
        //         </tbody>
        //     </table>
        // </Container>
        <Container>
            <MaterialReactTable
                columns={columns}
                data={transactions}
                enableColumnResizing
                enableGrouping
                enableStickyHeader
                enableStickyFooter
                initialState={{
                density: 'compact',
                expanded: true, //expand all groups by default
                grouping: ['category'], //an array of columns to group by by default (can be multiple)
                pagination: { pageIndex: 0, pageSize: 20 },
                sorting: [{ id: 'category', desc: false }], //sort by state by default
                }}
                muiToolbarAlertBannerChipProps={{ color: 'primary' }}
                muiTableContainerProps={{ sx: { maxHeight: 700 } }}
            />
        </Container>
    );
}