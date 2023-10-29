import './styles/UserCard.css';

const UserCard = ({ user, deleteUser, setInfoUpdate, handleOpenForm }) => {

    const handleDelete = () => {
        deleteUser('/users', user.id)
    }

    const handleEdit = () => {
        setInfoUpdate(user)
        handleOpenForm(true)
    }

  return (
    <article className="person">
      <h3 className="person_name">{`${user.first_name} ${user.last_name}`}</h3>
      <ul className="person_list">
        <li className="person_item">
          <span className="person_label">Email: </span>
          <span className="person_value">
            <img className="person_img_email" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAO1JREFUSEvdld0NwjAMhK+bwCTAJjAJMAliEtgENgF9Va8ykVIl/ZFQ/dKHOv58VztttHA0C9fXugB7STdJm4m2vSWdJD2pEy16SAIyRwDZpoBPV5kXJIwJ1L+6g23zUYEBFL9LulQSUI8LjizACdcKCM2ck4ayAAo7GTWHAcuwhMHwt4tnswBecBC5PH+mInQZLYk5tnoQQB2Ko+TYQeJ3iZYwjqh0FAMMAWDLsGCXWJIOQxXAXQHB6xh03S5TEqMAVuNN7zd1TkDpWoxW8P+AOS+7fnTjXcTiMI5Tb9TsdV3qcVXeun6ZVdJLk7+tbDwZy423ZAAAAABJRU5ErkJggg==" alt='image email'/>
            {user.email}
          </span>
        </li>
        <li className="person_item">
          <span className="person_label">Birthday: </span>
          <span className="person_value">
            <img className="person_img_birthday" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAPNJREFUSEvtld0RgkAMhJdOtBPtRCtRK1ErkU60E53PSZiAB3MHog+aF7jLzyabBCrNLNXM8TUEsJK0k7SwJNaSbvbOHTpskLOkfSrZPgAcLx0Hgm8l1ZKuAdjNSABdS/oAPMBJ0kHSxjIGhCCceQLoOs6AZAHczcoTgBIqcrpQL40y7kgIcO6yALyCWDYcwztCZWSPUMExBwDeMYxZjhmy2KvWFEGBT8WYwNGnoSs2uct7CqTY5qMA76SoGdlYgW/u1D70Ntk5H+K5WJfa5OIgllnS7w8Qd+WHKJqycC//hNQUjV241oJ5c77605/6yX76PwAA7UYZpN55lAAAAABJRU5ErkJggg==" alt='image gift'/>
            {user.birthday}
          </span>
        </li>
      </ul>
      <div className="person_btns">
        <button className="person_btn_delete" onClick={handleDelete}>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAI1JREFUSEvtlcsRgCAMRB+daSlWolampdiJTg5+BgkCA16AIwP7yAJZQ+FhCusTAuiARTnIDEy+Q34BfOKiuwEDsGoQG7BnsuzS/R2QqYBbRruDVKteenUAzipt21zzSRY1gPPpP/1uFlVgUUwDDP5okmASNjFDQqe3N2jNTsTHCIiabF+RGVOBc21xwAEyqysZeJZMbwAAAABJRU5ErkJggg==" alt=""/>
        </button>
        <button className="person_btn_edit" onClick={handleEdit}>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAP1JREFUSEvFlesRwjAMg9VNYBMYhUkYBTaBUdgE7uPqXurGedD2yJ+0qStZspMM2nkMO+NrK4KDpJOku0/YExB0k8QPpXGW9BwDHiM4ry9JfGP+Dk+QBkcEOXADJDGejxHBOyDOkVkyBgg4a8wXs8sraCWIbLH1VQRp5igzW1BCDX+2CCAaIAVJbbEiT/7nihxZlAO3uvhazOrVUoNecBRaCy/a1CuIwKN1wFE0JV5TkJNfUrSwuEbQqsh8X0VQynw1QdoZsz53W/xnBYZTAiemm6D3uvg/QctxXVPFJuNIz94HbJRrcoHUwPx3asRJGu7kXsBq/FZ3cki0O8EHmFFTGdR7G0wAAAAASUVORK5CYII=" alt=""/>
        </button>
      </div>
    </article>
  )
}

export default UserCard