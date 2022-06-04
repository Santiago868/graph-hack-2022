import { Input } from '@chakra-ui/react'



const ContractForm = () => {

    const getContract = (event: any) => {
        let contract = event.target.value;
        alert(contract)
    }


    return (
        <>
            <Input
                type="text"
                name="name"
            />
           
        </>
    )
   
};

export default ContractForm;