// Generated by https://quicktype.io
export interface Data{
    UsuarioId:string | null;
    AlimentoId:number;
    Cantidad:number;
}
export interface AlimentosResponse {
    status:  number;
    message: string;
    data:    Alimento[];
}

export interface Alimento {
    id:              number;
    text:            string;
    energia_KcaL:    number;
    proteina_g:      number;
    grasaTotal_g:    number;
    carbohidratos_g: number;
    porcion:         string;
    nombre:           string;
}


// Generated by https://quicktype.io

export interface AlimentoResponse {
    status:  number;
    message: string;
    data:    AlimentoDetalle;
}

export interface AlimentoDetalle {
    id:              number;
    codigoAlimento:  number;
    nombre:          string;
    porcion:         string;
    pesoGramos:      number;
    proteina_g:      number;
    grasaTotal_g:    number;
    carbohidratos_g: number;
    energia_KcaL:    number;
    alimento:        Detalle;
}

export interface Detalle {
    id:                   number;
    codigo:               number;
    nombre:               string;
    aguaPorcentaje:       number;
    energia_KcaL:         number;
    proteina_g:           number;
    grasaTotal_g:         number;
    carbohidratos_g:      number;
    fibraDietTotal_g:     number;
    ceniza_g:             number;
    calcio_mg:            number;
    fosforo_mg:           number;
    hierro_mg:            number;
    tiamina_mg:           number;
    riboflavina_mg:       number;
    niacina_mg:           number;
    vitC_mg:              number;
    vitAEquivRetinol_mcg: number;
    acGrasasMonoInsat_g:  number;
    acGrasasPoliInsat_g:  number;
    acGrasasSaturadas_g:  number;
    colesterol_mg:        number;
    potasio_mg:           number;
    sodio_mg:             number;
    zinc_mg:              number;
    magnecio_mg:          number;
    vitB6_mg:             number;
    vitB12_mcg:           number;
    acFolico_mcg:         number;
    folatoEquivFD_mcg:    number;
    fraccionComestible:   number;
    estadosId:            number;
    gruposAlimenticiosId: number;
}




