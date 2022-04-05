const baseUrl = "http://localhost:3001"

const findStaff= async () => {
    const response = await fetch(`${baseUrl}/staff`);
    const staffs = await response.json();
    staffs.forEach((staff) => {
        document.getElementById("staffList").insertAdjacentHTML(
            "beforeend",
            `<div class="StaffListaItem">
            <div>
                <div class="StaffListaItem_name">${`Nome: ${staff.name}`}</div>
                <div class="StaffListaItem_idade">${`Idade: ${staff.idade}`}</div>
                <div class="StaffListaItem_email">${`Email: ${staff.email}`}</div>
                <div class="StaffListaItem_whatsapp">${`Whatsapp: ${staff.whatsapp}`}</div>
                <div class="StaffListaItem_fone">${`Fone: ${staff.fone}`}</div>
                <div class="StaffListaItem_rg">${`RG: ${staff.rg}`}</div>
                <div class="StaffListaItem_cpf">${`CPF: ${staff.cpf}`}</div>
                <div class="StaffListaItem_experienceEvents">${`Experiência com Eventos: ${staff.experienceEvents}`}</div>
                <div class="StaffListaItem_adress">${`Endereço: ${staff.adress}`}</div>
            </div>
            <img class="StaffListaItem_pic" src=${staff.pic} alt=${`${staff.name}`}/>
            </div>`,
        );
    });
};

const findByIdColaborador = async () => {
    const id = document.getElementById("idStaff").value;
    const response = await fetch(`${baseUrl}/staff/find/${id}`);
    const staff = await response.json();
    const colaboradorEscolhidoDiv = document.getElementById("colaboradorEscolhido");

    colaboradorEscolhidoDiv.innerHTML = `
    <div class ="StaffCardItem">
        <div>
            <div class="StaffListaItem_name">${`Nome: ${staff.name}`}</div>
            <div class="StaffListaItem_idade">${`Idade: ${staff.idade}`}</div>
            <div class="StaffListaItem_email">${`Email: ${staff.email}`}</div>
            <div class="StaffListaItem_whatsapp">${`Whatsapp: ${staff.whatsapp}`}</div>
            <div class="StaffListaItem_fone">${`Fone: ${staff.fone}`}</div>
            <div class="StaffListaItem_rg">${`RG: ${staff.rg}`}</div>
            <div class="StaffListaItem_cpf">${`CPF: ${staff.cpf}`}</div>
            <div class="StaffListaItem_experienceEvents">${`Experiencia com Eventos: ${staff.experienceEvents}`}</div>
            <div class="StaffListaItem_adress">${`Endereço: ${staff.adress}`}</div>
        </div>
            <img class="StaffListaItem_pic" src=${staff.pic} alt=${`${staff.name}`}/>
    </div>
    `;
};

findStaff();
