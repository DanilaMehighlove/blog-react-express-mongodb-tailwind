interface IError {
  errors?: string[];
  width?: number;
}

export function Error({errors}: IError) {

  return (
    <div>
      {
        errors?.length ?
        <div className="text-red-600 max-w-xs text-ellipsis overflow-hidden whitespace-nowrap">
          {
            errors?.map(error => error + ' ') 
          }
        </div> :
        <div className="opacity-0">1</div>
      }
    </div>
  )
}