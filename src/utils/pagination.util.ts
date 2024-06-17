export interface PaginationResult<Badge> {
  results: Badge[];
  metadata: PaginationMetadata;
}

export interface PaginationMetadata {
  itemCount: number;
  totalItems: number;
  maxItemsPerPage: number;
  totalPages: number;
  currentPage: number;
}
