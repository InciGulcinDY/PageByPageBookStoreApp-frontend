import { Dropdown } from 'react-bootstrap'

type Props = {}

const SignOut = (props: Props) => {
  return (
    <div>
    <Dropdown>
      <Dropdown.Toggle
        className="btn-light fs-5"
        variant="secondary"
        id="dropdown-basic"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="currentColor"
          className="bi bi-person mb-1"
          viewBox="0 0 16 16"
        >
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
        </svg>
        Login
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/">Login</Dropdown.Item>
        <Dropdown.Item href="/">Register</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </div>
  )
}

export default SignOut