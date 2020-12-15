function rule(str) {
    var obj = JSON.parse(str);
    var ret = {};
    var rfc = {};

    if ((obj.userinfo_002_age <= 18 || obj.userinfo_002_age >= 50) && obj.biz_001_is_inloan_users < 1) {
        rfc.fk_refuse_code += "|SI101"
    }
    if (obj.sys_004_is_in_manual_audit == 1) {
        rfc.energy_in = "FK0000";
    }
    if (obj.sys_004_is_in_manual_audit != 1) {
        rfc.energy_in = "FK0001";
    }
    if (JSON.stringify(rfc) == '{}') {
        rfc.fk_refuse_code = "|"
    }
    ret.result = {
        "fk_004_refuse_code": rfc.fk_refuse_code,
        "biz_001_is_inloan_users": obj.biz_001_is_inloan_users,
        "product": "|",
        "fk_energy_in": rfc.energy_in,
        "fk_electrical_number": 6
    };
    return JSON.stringify(ret)
}