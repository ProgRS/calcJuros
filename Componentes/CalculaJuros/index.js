import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

import estilosGlobal from "../../assets/estilos";
import { retornaValorProporcional, retornaTotalJuros } from "../../servicos/calculos";

export default function CalculaJuros() {

    const [valor, setValor] = useState(0);
    const [juros, setJuros] = useState(0);
    const [valorJuros, setValorJuros] = useState(0);
    const [valorTotal, setValorTotal] = useState(0);

    function handleCalculaJuros() {
        const jurosCalculado = retornaValorProporcional(valor, juros);
        const totalDivida = retornaTotalJuros(valor, jurosCalculado);

        setValorJuros(jurosCalculado)
        setValorTotal(totalDivida);
    }

    return(
        <View style={estilosGlobal.container}>
            <Text style={estilosGlobal.titulo}>Calcular Juros</Text>
            <View style={estilosGlobal.areaInput}>
                <Text style={estilosGlobal.text}>R$</Text>
                <TextInput style={estilosGlobal.input} placeholder="Digite o valor em reais" onChangeText={(valor) => { setValor(valor) }} />
            </View>
            <View style={estilosGlobal.areaInput}>
                <Text style={estilosGlobal.text}>%</Text>
                <TextInput style={estilosGlobal.input} placeholder="Digite o percentual de juros" onChangeText={(juros) => { setJuros(juros) }} />
            </View>
            <View style={estilosGlobal.areaResultado}>
                <Text style={estilosGlobal.tituloResultado}>Valor original da dívida:</Text>
                <Text style={estilosGlobal.valorResultado}>R$ {valor} </Text>
                <Text style={estilosGlobal.tituloResultado}>Juros de {juros} %:</Text>
                <Text style={estilosGlobal.valorResultado}>R$ {valorJuros} </Text>
                <Text style={estilosGlobal.tituloResultado}>Valor total à pagar:</Text>
                <Text style={estilosGlobal.valorResultado}>R$ {valorTotal} </Text>
            </View>
            <Button color='#339999' title="Calcular Juros" onPress={handleCalculaJuros} />
        </View>
    );
}