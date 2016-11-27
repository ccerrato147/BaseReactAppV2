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
        localidad: '',
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
        name: '',
        date: '',
        phone: '',
        manager: '',
        email: '',
        division: '',
        nameHcp: '',
        hcpTier: '',
        amount: '',
        explain: '',
        signature: '',
        dateSignature: '',
        businessHead: '',
        dateBusinessHead: '',
        businessHeadApproved: '',
        finance: '',
        dateFinance: '',
        financeApproved: '',
        oecSignature: '',
        dateOec: '',
        oecApproved: '',
        estado: '',
        aprobadores: Map({})
    }),
    abbott10: Map({
        nombre: '',
        direccion: '',
        nombreContacto: '',
        numeroTelefono: '',
        list: List([
            {
                nombre: 'alberto',
                cargo: 'dev',
                gobierno: 'si',
                rol: 'sup',
                impacto: 'Hospital',
                escala: 'nacional',
                interes: 'si',
                abbott: 'no',
                idPadre: '25'
            }
        ]),
        solicitante: '',
        cargo: '',
        fechaFirmaDelSolicitante: '',
        estado: ''
    }),
    abbott101: Map({
        fecha: '',
        nombreDelSolicitante: '',
        unidadDeNegocio: '',
        nombreBeneficiario: '',
        solicitudDeSubvencion: '',
        valorDeLaBeca: '',
        propositoBeneficio: '',
        solicitante: '',
        fechaFirmaDelSolicitante: '',
        gerenteDeProducto: '',
        fechaGerenteDeProducto: '',
        gerenteDeProductoAprobo: '',
        directorLegal: '',
        fechaDirectoLegal: '',
        directorLegalAprobo: '',
        directorFinanciero: '',
        fechaDirectorFinanciero: '',
        directorFinancieroAprobo: '',
        gerenteMedico: '',
        fechaGerenteMedico: '',
        gerenteMedicoAprobo: '',
        gerenteGeneral: '',
        fechaGerenteGeneral: '',
        gerenteGeneralAprobo: '',
        aprobadores: Map({})
    }),
    abbott11: Map({
        seccion: '',
        base: '',
        division: '',
        solicitante: '',
        fechaFirmaDelSolicitante: '',
        gerenteDeProducto: '',
        fechaGerenteDeProducto: '',
        gerenteDeProductoAprobo: '',
        gerenteGeneral: '',
        fechaGerenteGeneral: '',
        gerenteGeneralAprobo: '',
        directorFinanciero: '',
        fechaDirectorFinanciero: '',
        directorFinancieroAprobo: '',
        gerenteCumplimiento: '',
        fechaGerenteCumplimiento: '',
        gerenteCumplimientoAprobo: '',
        directorRegional: '',
        fechaDirectorRegional: '',
        directorRegionalAprobo: '',
        estado: '',
        aprobadores: Map({})
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
        division: '',
        linea: '',
        fecha: '',
        hora: '',
        lugar: '',
        pais: '',
        objetivo: '',
        list: List([]),
        reunionHcp: '',
        focus: '',
        servicio: '',
        promocion: '',
        reunionEmpleados: '',
        educacionPacientes: '',
        educacionEmpleados: '',
        reunionCliente: '',
        otro: '',
        otroComentario: '',
        producto: '',
        material: '',
        accionesDeSeguimiento: '',
        comentariosAdicionales: '',
        montoTotal: '',
        nombre: '',
        fechaFirmaVentas: '',
        gerenteDeDistrito: '',
        fechaGerenteDeDistrito: '',
        gerenteDeDistritoAprobo: '',
        aprobadores: Map({}),
        estado: ''
    }),
    abbottExpensesReport: Map({
        fecha: '',
        solicitante: '',
        puesto: '',
        pais: '',
        descripcion: '',
        tipoDeGasto: '',
        list: List([]),
        totalEnLetras: '',
        titular: '',
        fechaFirmaTitular: '',
        autorizacion: '',
        fechaFirmaAutorizacion: '',
        autorizacionAprobo: '',
        nombreTransferencia: '',
        aprobadores: Map({}),
        cuentaBancaria: '',
        anticipo: '',
        gastos: '',
        depositos: '',
        totalLiquidacion: ''
    })
});