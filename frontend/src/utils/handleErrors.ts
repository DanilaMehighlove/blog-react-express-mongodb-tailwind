export function handleMongoErrors(response: any): string[] {
  const errorMessage: string[] = [];

  if (response?.errors) {
    const errors = response.errors;
    
    Object.keys(response.errors).forEach(field => {
      if (errors[field].kind === 'required') {
        errorMessage.push(`The field "${field}" should not be empty.`);
      }
    });
  }

  if (response?.code === 11000 && response?.keyPattern?.title) {
    errorMessage.push('The title must be unique.');
  }

  if (response?.code === 11000 && response?.keyPattern?.login) {
    errorMessage.push('The login is already taken.');
  }

  if (response?.notFound) {
    errorMessage.push('The user was not found.');
  }

  return errorMessage;
}