import { Map, fromJS, List } from 'immutable';
import moment from 'moment';

let today = moment();

export default Map({
    user: Map({
        displayName: ''
    }),
    today: today,
    abbott01: Map({
        estado: '',
        nacional: '',
        internacional: '',
        fecha: '',
        nombreDelSolicitante: '',
        unidadDeNegocio: '',
        nombreHcp: '',
        especialidadHcp: '',
        paisDeResidencia: '',
        empleadoDelGobierno: '',
        nombreDelHospital: '',
        rolEnGobierno: '',
        impacto: '',
        escala: '',
        asociacion: '',
        responsabilidades: '',
        pratrocinioIncluye: '',
        patrocinadoPreviamente: '',
        nombrePatrocinioPrevio: '',
        lugarPatrocinioPrevio: '',
        congreso: '',
        nombreDelCongreso: '',
        paisCiudad: '',
        lugar: '',
        fechaDeInicio: '',
        fechaDeFinalizacion: '',
        gerenteDeDistrito: '',
        fechaGerenteDeDistrito: '',
        gerenteDeDistritoAprobo: '',
        gerenteDelPais: '',
        fechaGerenteDelPais: '',
        gerenteDelPaisAprobo: '',
        gerenteDeProducto: '',
        fechaGerenteDeProducto: '',
        gerenteDeProductoAprobo: '',
        directorLegal: '',
        fechaDirectoLegal: '',
        directorLegalAprobo: '',
        gerenteGeneral: '',
        fechaGerenteGeneral: '',
        gerenteGeneralAprobo: '',
        registro: '',
        hotel: '',
        transporte: '',
        comidas: '',
        eventoConsistente: '',
        contenidoDeEspecialidad: '',
        contenidoFuerte: '',
        hcpNecesidadLegitima: '',
        hcpCompartira: '',
        conocimientoNecesario: '',
        aprobadores: Map({})
    }),
    abbott02: Map({
        fecha: '',
        nombreHcp: '',
        especialidadHcp: '',
        paisDeResidencia: '',
        empleadoDelGobierno: '',
        nombreDelHospital: '',
        rolEnGobierno: '',
        impacto: '',
        escala: '',
        decisionNegocio: '',
        decisionAbbott: '',
        detalles: '',
        solicitante: '',
        fechaFirmaDelSolicitante: '',
        gerenteDeProducto: '',
        fechaGerenteDeProducto: '',
        gerenteDeProductoAprobo: '',
        directorLegal: '',
        fechaDirectoLegal: '',
        directorLegalAprobo: '',
        gerenteGeneral: '',
        fechaGerenteGeneral: '',
        gerenteGeneralAprobo: '',
        aprobadores: Map({}),
        estado: ''
    }),
    abbott04: Map({
        fecha: '',
        nombreDelEvento: '',
        unidadDeNegocio: '',
        localidadDelEvento: '',
        racionalDelNegocio: '',
        tipoDeEvento: '',
        fechaDelEvento: '',
        lugar: '',
        numeroDeAsistentes: '',
        numeroDeHcp: '',
        empleadosAbbott: '',
        aMedicos: '',
        aPublicoGeneral: '',
        aFarmacias: '',
        aMedios: '',
        aFuerzaDeVentas: '',
        aOtro: '',
        hotel: '',
        transporteAereo: '',
        transporteTerrestre: '',
        registro: '',
        speakers: '',
        otrosServicios: '',
        comidas: '',
        salones: '',
        equipo: '',
        materiales: '',
        otros: '',
        solicitante: '',
        fechaFirmaDelSolicitante: '',
        aprobadores: Map({}),
        gerenteDeDistrito: '',
        fechaGerenteDeDistrito: '',
        gerenteDeDistritoAprobo: '',
        gerenteDelPais: '',
        fechaGerenteDelPais: '',
        gerenteDelPaisAprobo: '',
        gerenteDeProducto: '',
        fechaGerenteDeProducto: '',
        gerenteDeProductoAprobo: '',
        gerenteMedico: '',
        fechaGerenteMedico: '',
        gerenteMedicoAprobo: '',
        gerenteGeneral: '',
        fechaGerenteGeneral: '',
        gerenteGeneralAprobo: '',
        estado: ''
    }),
    abbott05: Map({
        fecha: '',
        solicitante: '',
        nombreDelSolicitante: '',
        unidadDeNegocio: '',
        nombreHcp: '',
        especialidadHcp: '',
        paisDeResidencia: '',
        tipoDeServicio: '',
        empleadoDelGobierno: '',
        nombreDelHospital: '',
        rolEnGobierno: '',
        impacto: '',
        escala: '',
        asociacion: '',
        responsabilidades: '',
        comentarios: '',
        experienciaServicio: '',
        reconocidoLider: '',
        experienciaSolicitada: '',
        otros: '',
        fechaFirmaDelSolicitante: '',
        gerenteDeDistrito: '',
        fechaGerenteDeDistrito: '',
        gerenteDeDistritoAprobo: '',
        gerenteDelPais: '',
        fechaGerenteDelPais: '',
        gerenteDelPaisAprobo: '',
        gerenteDeProducto: '',
        fechaGerenteDeProducto: '',
        gerenteDeProductoAprobo: '',
        directorLegal: '',
        fechaDirectoLegal: '',
        directorLegalAprobo: '',
        gerenteGeneral: '',
        fechaGerenteGeneral: '',
        gerenteGeneralAprobo: '',
        gerenteMedico: '',
        fechaGerenteMedico: '',
        gerenteMedicoAprobo: '',
        aprobadores: Map({}),
        estado: ''
    }),
    abbott06: Map({
        date: today
    }),
    abbott10: Map({
        date: today
    }),
    abbott101: Map({
        date: today
    }),
    abbott11: Map({
        date: today
    }),
    abbottExcepcionCompra: Map({
        fecha: '',
        tipoDeOrden: '',
        ordenDeCompra: '',
        proveedor: '',
        bienesOServiciosSolicitados: '',
        monto: '',
        moneda: '',
        razonDeExcepcion: '',
        fechaFirmaDelSolicitante: '',
        fechaFirmaDelJefeInmediato: '',
        fechaFirmaDelGerente: '',
        jefeInmediato: '',
        jefeInmediatoAprobo: '',
        gerenteGeneral: '',
        gerenteGeneralAprobo: '',
        requiereFirmaDirector: '',
        aprobadores: Map({}),
        solicitante: '',
        estado: ''
    }),
    abbottObjetivosActividad: Map({
        date: today
    }),
    abbottExpensesReport: Map({
        date: today
    })
});