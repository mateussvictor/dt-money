import { useForm } from 'react-hook-form'
import { object, string, InferType } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { MagnifyingGlass } from 'phosphor-react'
import { SearchFormContainer } from './styles'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { useContext } from 'react'

const searchFormSchema = object({
  query: string()
})

type SearchFormInput = InferType<typeof searchFormSchema>

export function SearchForm() {
  const { fetchTransactions } = useContext(TransactionsContext)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<SearchFormInput>({
    resolver: yupResolver(searchFormSchema)
  })

  async function handleSearchTransactions(data: SearchFormInput) {
    await fetchTransactions(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Search for transactions..."
        {...register('query')}
      />

      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Search
      </button>
    </SearchFormContainer>
  )
}
