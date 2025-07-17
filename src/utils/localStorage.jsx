const employees = []

const admin = [
  {
    id: 1,
    email: 'admin@me.com',
    password: '123',
  },
]

export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees))
  localStorage.setItem('admin', JSON.stringify(admin))
}
export const getLocalStorage = () => {
  let employees = []
  let admin = {}

  try {
    const employeesRaw = localStorage.getItem('employees')
    if (employeesRaw && employeesRaw !== 'undefined') {
      employees = JSON.parse(employeesRaw)
    }
  } catch (err) {
    console.error('Error parsing employees from localStorage:', err)
  }

  try {
    const adminRaw = localStorage.getItem('admin')
    if (adminRaw && adminRaw !== 'undefined') {
      admin = JSON.parse(adminRaw)
    }
  } catch (err) {
    console.error('Error parsing admin from localStorage:', err)
  }

  return { employees, admin }
}
