!function (e) {
    function t(t) {
        for (var s, r, l = t[0], o = t[1], d = t[2], u = 0, m = []; u < l.length; u++) r = l[u], i[r] && m.push(i[r][0]), i[r] = 0;
        for (s in o) Object.prototype.hasOwnProperty.call(o, s) && (e[s] = o[s]);
        for (c && c(t); m.length;) m.shift()();
        return n.push.apply(n, d || []), a()
    }

    function a() {
        for (var e, t = 0; t < n.length; t++) {
            for (var a = n[t], s = !0, l = 1; l < a.length; l++) {
                var o = a[l];
                0 !== i[o] && (s = !1)
            }
            s && (n.splice(t--, 1), e = r(r.s = a[0]))
        }
        return e
    }

    var s = {}, i = {0: 0}, n = [];

    function r(t) {
        if (s[t]) return s[t].exports;
        var a = s[t] = {i: t, l: !1, exports: {}};
        return e[t].call(a.exports, a, a.exports, r), a.l = !0, a.exports
    }

    r.m = e, r.c = s, r.d = function (e, t, a) {
        r.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: a})
    }, r.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, r.t = function (e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var a = Object.create(null);
        if (r.r(a), Object.defineProperty(a, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var s in e) r.d(a, s, function (t) {
            return e[t]
        }.bind(null, s));
        return a
    }, r.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "";
    var l = window.webpackJsonp = window.webpackJsonp || [], o = l.push.bind(l);
    l.push = t, l = l.slice();
    for (var d = 0; d < l.length; d++) t(l[d]);
    var c = o;
    n.push(["pLYI", 2, 1]), a()
}({
    "+zjq": function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const s = a("q1tI"), i = a("DvoB"), n = i.createStyles({
            root: {
                width: "100vw",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }
        });
        t.default = i.withStyles(n)(class extends s.Component {
            render() {
                return s.createElement("div", {className: this.props.classes.root}, s.createElement("h1", null, "404"), s.createElement("p", null, "file not found."))
            }
        })
    }, 0: function (e, t) {
    }, 1: function (e, t) {
    }, 2: function (e, t) {
    }, "26Q4": function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const s = a("q1tI"), i = a("SUMQ"), n = a("1OZW"), r = a("0G56"), l = a("Sk/v"), o = a("SNP2"), d = a("/xgX"),
            c = a("C+zi"), u = a("1IiC"), m = a("JgXy"), h = a("WqRt"), p = a("pPbJ"), f = a("nwgO"), g = a("IrhF"),
            v = a("9qBj"), E = a("65xj");
        t.default = i.withStyles(e = > ({
            head: {paddingTop: e.spacing.unit, display: "flex", alignItems: "center"},
            root: {marginTop: 2 * e.spacing.unit}
        })
    )
        (class extends s.Component {
            constructor(e) {
                super(e), this.refresh = (() = > {fetch(`${v.default.hostName}/admin/activity/${this.props.activityId}/applicant`, {
                    mode: v.default.corsType,
                    cache: "no-cache"
                }
            ).
                then(e = > {if(
                !e.ok
            )
                throw e.status;
                return e.json()
            }).
                then(e = > {this.setState({items: e})}
            ).
                catch(e = > {console.log(e), alert("未能获取报名数据\n请联系科协技术部"
            )
            })
            }),
                this.detail = (e = > {this.setState({detail: e})}
            ),
                this.remove = ((e, t) = > {this.setState({removeId: e, removeUnique: t})}
            ),
                this.closeDetail = (() = > {this.setState({detail: void 0})}
            ),
                this.detailRemove = (() = > {
                    this
                    .setState({removeId: this.state.detail.id, removeUnique: this.state.detail.unique, detail: void 0})
                }
            ),
                this.closeRemove = (() = > {this.setState({removeId: void 0, removeUnique: void 0})}
            ),
                this.removeRequest = (() = > {fetch(`${v.default.hostName}/admin/activity/${this.props.activityId}/applicant/${this.state.removeId}`, {
                    method: "DELETE",
                    mode: v.default.corsType,
                    cache: "no-cache"
                }
            ).
                then(e = > {if(
                !e.ok
            )
                throw e.status;
                return e.json()
            }).
                then(e = > {"" == e.reason ? this.refresh() : alert(e.reason)
            }).
                catch(e = > {console.log(e), alert("无法删除报名\n请联系科协技术部"
            )
            }),
                this.setState({removeId: void 0, removeUnique: void 0})
            }),
                this.state = {items: []}
            }

            render() {
                const e = this.props.classes;
                return s.createElement(p.default, {className: e.root}, s.createElement(m.default, {subheader: s.createElement(h.default, {className: e.head}, s.createElement(f.default, {title: "加载/刷新"}, s.createElement(u.default, {onClick: this.refresh}, s.createElement(g.default, null))), this.props.finish ? "请在右侧下载报名结果的xlsx文件" : "报名数据")}, this.state.items.map(e = > s.createElement(E.default, {
                    key: e.id,
                    value: e,
                    detail: this.detail,
                    remove: this.remove
                }))), s.createElement(r.default, {
                    fullWidth: !0,
                    open: null != this.state.detail,
                    onClose: this.closeDetail
                }, s.createElement(c.default, null, "详细信息:", null != this.state.detail && (this.state.detail.unique || this.state.detail.id)), s.createElement(o.default, null, s.createElement(d.default, {component: "pre"}, this.state.detail && JSON.stringify(this.state.detail.data, null, "\t"))), s.createElement(l.default, null, s.createElement(n.default, {
                    color: "secondary",
                    onClick: this.detailRemove
                }, "删除"), s.createElement(n.default, {
                    color: "primary",
                    onClick: this.closeDetail
                }, "关闭"))), s.createElement(r.default, {
                    fullWidth: !0,
                    open: null != this.state.removeId,
                    onClose: this.closeRemove
                }, s.createElement(c.default, null, "确定要删除“", null != this.state.removeId && (this.state.removeUnique || this.state.removeId), "”吗？"), s.createElement(l.default, null, s.createElement(n.default, {
                    color: "secondary",
                    onClick: this.removeRequest
                }, "删除"), s.createElement(n.default, {color: "primary", onClick: this.closeRemove}, "放弃")))
            )
            }
        })
    }, "3sja": function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const s = a("q1tI"), i = a("SUMQ"), n = a("ciEP"), r = a("JgXy"), l = a("NABS"), o = a("4eE1"), d = a("EHL7"),
            c = a("AUy9"), u = a("8C4M");
        t.default = i.withStyles(e = > ({content: {paddingLeft: 4 * e.spacing.unit}})
    )
        (class extends s.Component {
            constructor(e) {
                super(e), this.toggleExpand = (() = > {this.setState({expand: !this.state.expand})}
            ),
                this.state = {expand: !1}
            }

            render() {
                const e = this.props.classes;
                return [s.createElement(l.default, {
                    button: !0,
                    onClick: this.toggleExpand,
                    disabled: this.props.disabled,
                    key: this.props.name + "-item"
                }, this.state.expand ? s.createElement(c.default, null) : s.createElement(u.default, null), s.createElement(o.default, null, this.props.name)), s.createElement(n.default, {
                    in: this.state.expand,
                    key: this.props.name + "-folder"
                }, s.createElement(r.default, {
                    disablePadding: !0,
                    className: e.content
                }, this.state.expand && this.props.children)), s.createElement(d.default, {key: this.props.name + "-divider"})]
            }
        })
    }, "65xj": function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const s = a("q1tI"), i = a("SUMQ"), n = a("r1Q0"), r = a("1IiC"), l = a("NABS"), o = a("4eE1"), d = a("FrwU"),
            c = a("AiBr"), u = i.createStyles({hover: {backgroundColor: n.grey[300]}});
        t.default = i.withStyles(u)(class extends s.Component {
            constructor(e) {
                super(e), this.enter = (() = > {this.setState({hover: !0})}
            ),
                this.leave = (() = > {this.setState({hover: !1})}
            ),
                this.detail = (() = > {this.props.detail(this.props.value)}
            ),
                this.remove = (() = > {this.props.remove(this.props.value.id, this.props.value.unique)}
            ),
                this.state = {hover: !1}
            }

            render() {
                const e = this.props.classes;
                return s.createElement(l.default, {
                    className: this.state.hover ? e.hover : "",
                    onMouseEnter: this.enter,
                    onMouseLeave: this.leave
                }, s.createElement(r.default, {onClick: this.detail}, s.createElement(c.default, null)), s.createElement(o.default, null, this.props.value.unique || this.props.value.id), s.createElement(r.default, {onClick: this.remove}, s.createElement(d.default, null)))
            }
        })
    }, "9qBj": function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const s = a("gUs0"),
            i = {hostName: "/voteapp", rootPath: "/voteapp/page/", corsType: "cors", loginErrMsg: e = > {
                switch(e) {case
                    401
                :
                    return "密码错误";
                case
                    403
                :
                    return "禁止访问";
                default:
                    return `登录失败，请联系科协技术部\n错误信息:/login[${e}]`
                }
            }, DragDropConst
    :
        Symbol(), extensionName
    :
        {
            text:"单行文本", number
        :
            "数字", radio
        :
            "单选框", checkbox
        :
            "复选框", date
        :
            "日期", textarea
        :
            "多行文本", group
        :
            "分组", personName
        :
            "姓名", teamName
        :
            "队伍名称", sex
        :
            "性别", nation
        :
            "民族", political
        :
            "政治面貌", studentNumber
        :
            "学号", phone
        :
            "手机号", qq
        :
            "QQ号", email
        :
            "电子邮箱", idcard
        :
            "身份证号", GPA
        :
            "GPA", rank
        :
            "排名"
        }
    ,
        extensionDesc:{
            text:{
                caseEditable:!1, rangeName
            :
                "字数"
            }
        ,
            number:{
                caseEditable:!1, rangeName
            :
                "值"
            }
        ,
            radio:{
                caseEditable:!0, rangeName
            :
                ""
            }
        ,
            checkbox:{
                caseEditable:!0, rangeName
            :
                "选择项数"
            }
        ,
            date:{
                caseEditable:!1, rangeName
            :
                "日期"
            }
        ,
            textarea:{
                caseEditable:!1, rangeName
            :
                "字数"
            }
        ,
            group:{
                caseEditable:!1, rangeName
            :
                ""
            }
        ,
            personName:{
                caseEditable:!1, rangeName
            :
                "姓名长度"
            }
        ,
            teamName:{
                caseEditable:!1, rangeName
            :
                "队名长度"
            }
        ,
            sex:{
                caseEditable:!1, rangeName
            :
                ""
            }
        ,
            nation:{
                caseEditable:!1, rangeName
            :
                ""
            }
        ,
            political:{
                caseEditable:!0, rangeName
            :
                ""
            }
        ,
            studentNumber:{
                caseEditable:!1, rangeName
            :
                ""
            }
        ,
            phone:{
                caseEditable:!1, rangeName
            :
                ""
            }
        ,
            qq:{
                caseEditable:!1, rangeName
            :
                ""
            }
        ,
            email:{
                caseEditable:!1, rangeName
            :
                ""
            }
        ,
            idcard:{
                caseEditable:!1, rangeName
            :
                ""
            }
        ,
            GPA:{
                caseEditable:!1, rangeName
            :
                "GPA"
            }
        ,
            rank:{
                caseEditable:!1, rangeName
            :
                "排名"
            }
        }
    ,
        defaultCase(e)
        {
            switch (e) {
                case"political":
                    return ["群众", "团员", "预备党员", "党员"];
                default:
                    return []
            }
        }
    ,
        defaultValue:(e, t) =
    >
        s.default[t](e)
    }
        ;t.default = i
    }, FYhD: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const s = a("q1tI"), i = a("RsOY"), n = a("SUMQ"), r = a("JgXy"), l = a("WqRt"), o = a("5PQa"), d = a("n5s8"),
            c = a("pPbJ"), u = a("P9b8"), m = a("9qBj"), h = a("c+yx"), p = a("o1PW"), f = a("SAaC"), g = a("s29V");
        const v = {
            drop() {
            }, hover(e, t, a) {
                -1 == t.getItem().id && a.addItem(t.getItem())
            }
        };
        t.default = n.withStyles(e = > ({
            groupBox: {
                marginLeft: 27,
                borderLeft: "2px solid lightgrey",
                paddingLeft: 23
            }
        })
    )
        (u.DropTarget(m.default.DragDropConst, v, function (e) {
            return {connectDropTarget: e.dropTarget()}
        })(class extends s.Component {
            constructor(e) {
                super(e), this.addItem = (e = > {e.id = this.state.id, e.originIndex = this.state.formItems.length;
                let t = [];
                "group" === e.type ? ((t = [m.default.defaultValue(e.id, e.type), m.default.defaultValue(e.id, e.type)])[0].type = "begin", t[1].type = "end") : t = [m.default.defaultValue(e.id, e.type)], this.setState({
                    id: this.state.id + 1,
                    addItemId: e.id,
                    formItems: i.default(this.state.formItems, {$push: t})
                })
            }),
                this.getIndex = (e = > this.state.formItems.findIndex(t = > t.id === e
            )),
                this.moveItem = ((e, t) = > {let a = this.state.formItems.findIndex(t = > t.id === e
            ),
                s = [this.state.formItems[a]];
                if ("group" === s[0].extension) {
                    let t = this.state.formItems.findIndex(t = > t.id === e && "end" === t.type
                )
                    ;s = this.state.formItems.slice(a, t + 1)
                }
                this.setState({formItems: i.default(this.state.formItems, {$splice: [[a, s.length], [a > t ? t : t - s.length + 1, 0,...s]
            ]
            })
            }),
                this.props.dirty()
            }),
                this.removeAddItem = (() = > {if( - 1 == this.state.addItemId
            )
                return this.props.dirty(), !1;
                let e = this.state.formItems.findIndex(e = > e.id == this.state.addItemId
            ),
                t = 1;
                return "group" === this.state.formItems[e].extension && (t = this.state.formItems.findIndex(e = > e.id === this.state.addItemId && "end" === e.type) - e + 1
            ),
                this.setState({formItems: i.default(this.state.formItems, {$splice: [[e, t]]})}), !0
            }),
                this.update = ((e, t, a) = > {let s = this.state.formItems.findIndex(t = > t.id === e
            )
                ;this.setState({formItems: i.default(this.state.formItems, {[s]: {[t]: {$set: a}}})}), this.props.dirty()
            }),
                this.delete = (e = > {let t = this.state.formItems.findIndex(t = > t.id === e
            ),
                a = 1;
                "group" === this.state.formItems[t].extension && (a = this.state.formItems.findIndex(t = > t.id === e && "end" === t.type) - t + 1
            ),
                this.setState({formItems: i.default(this.state.formItems, {$splice: [[t, a]]})}), this.props.dirty()
            }),
                this.caseAdd = ((e, t) = > {let a = this.state.formItems.findIndex(t = > t.id === e
            )
                ;this.setState({formItems: i.default(this.state.formItems, {[a]: {case: {$push: [t]}}})}), this.props.dirty()
            }),
                this.caseRemove = ((e, t) = > {let a = this.state.formItems.findIndex(t = > t.id === e
            )
                ;this.setState({formItems: i.default(this.state.formItems, {[a]: {case: {$splice: [[t, 1]]}}})}), this.props.dirty()
            }),
                this.foldNameUpdate = ((e, t) = > {let a = this.state.formItems.findIndex(t = > t.id === e && "begin" === t.type
            ),
                s = this.state.formItems.findIndex(t = > t.id === e && "end" === t.type
            )
                ;this.setState({
                    formItems: i.default(this.state.formItems, {
                        [a]: {name: {$set: t}},
                        [s]: {name: {$set: t}}
                    })
                })
            }),
                this.fold = (e = > {this.setState({foldId: e})}
            ),
                this.unfold = (() = > {this.setState({foldId: -1})}
            ),
                this.contextMenu = ((e, t) = > {this.setState({anchorPosition: t, anchorId: e})}
            ),
                this.rootMenu = (e = > {
                    e
                    .preventDefault(),
                    this
                    .setState({anchorPosition: {left: e.clientX, top: e.clientY}, anchorId: -1})
                }
            ),
                this.reContextMenu = (e = > {
                    e
                    .preventDefault(),
                    this
                    .setState({anchorPosition: void 0, anchorId: void 0})
                }
            ),
                this.menuClose = (e = > {e.preventDefault(), this.setState({anchorPosition: void 0, anchorId: void 0})}
            ),
                this.copy = (() = > {if( - 1 !== this.state.anchorId
            )
                {
                    let e = this.state.formItems.findIndex(e = > e.id === this.state.anchorId
                ),
                    t = [this.state.formItems[e]];
                    if ("group" === t[0].extension) {
                        let a = this.state.formItems.findIndex(e = > e.id === this.state.anchorId && "end" === e.type
                    )
                        ;t = this.state.formItems.slice(e, a + 1)
                    }
                    this.props.copy(JSON.parse(JSON.stringify(t)))
                }
            else
                this.props.copy(JSON.parse(JSON.stringify(this.state.formItems)));
                this.setState({anchorPosition: void 0, anchorId: void 0})
            }),
                this.paste = (() = > {
                    let e = this.state.id,
                    t = JSON.parse(JSON.stringify(this.props.paste())),
                    a = new Map;
                for (let s of t) "group" !== s.extension ? (s.id = e, e++) : "begin" === s.type ? (a.set(s.id, e), s.id = e, e++) : "end" === s.type && (s.id = a.get(s.id));
                if (-1 === this.state.anchorId) this.setState({
                    formItems: i.default(this.state.formItems, {$push: t}),
                    anchorPosition: void 0,
                    anchorId: void 0,
                    id: e
                }); else {
                    let a = this.state.formItems.findIndex(e = > e.id === this.state.anchorId
                )
                    ;this.setState({formItems: i.default(this.state.formItems, {$splice: [[a + 1, 0,...t]
                ]
                }),
                    anchorPosition:void 0, anchorId
                :
                    void 0, id
                :
                    e
                })
                }
            })
                ;let t = 0, a = [];
                for (let e of this.props.formItems) -1 === e.id && (e.id = t, null != e.groupTo && (e.groupTo.id = t, e.groupTo = void 0), t++), a.push(e);
                this.state = {id: t, formItems: a, addItemId: -1, foldId: -1, anchorPosition: void 0, anchorId: void 0}
            }

            componentDidMount() {
                this.props.removeNewItemHandle(this.removeAddItem), this.props.dataHandle(() = > h.Front2Back(this.state.formItems, 0)
            )
            }

            packItem(e, t, a) {
                let i = e;
                for (let e = 0; e < t; e++) i = s.createElement("div", {className: this.props.classes.groupBox}, i);
                return i = s.createElement("div", {key: a}, i)
            }

            render() {
                let e = 0, t = !1, a = [];
                for (let i of this.state.formItems) if ("group" === i.extension) "begin" == i.type ? (a.push(this.packItem(s.createElement(f.default, {
                    fromItem: i,
                    fold: this.fold,
                    unfold: this.unfold,
                    addItem: this.addItem,
                    getIndex: this.getIndex,
                    moveItem: this.moveItem,
                    nameUpdate: this.foldNameUpdate,
                    delete: this.delete,
                    contextMenu: this.contextMenu,
                    disabled: this.props.disabled
                }), e, i.id.toString() + ":begin")), e++, t = i.id != this.state.addItemId ? i.id === this.state.foldId : t) : "end" === i.type && (e--, t || i.id === this.state.addItemId || a.push(this.packItem(s.createElement(g.default, {
                    fromItem: i,
                    disabled: this.props.disabled
                }), e, i.id.toString() + ":end")), t = (i.id == this.state.addItemId || i.id !== this.state.foldId) && t); else {
                    if (t) continue;
                    a.push(this.packItem(s.createElement(p.default, {
                        fromItem: i,
                        addItem: this.addItem,
                        getIndex: this.getIndex,
                        moveItem: this.moveItem,
                        update: this.update,
                        delete: this.delete,
                        caseAdd: this.caseAdd,
                        caseRemove: this.caseRemove,
                        contextMenu: this.contextMenu,
                        disabled: this.props.disabled
                    }), e, i.id.toString()))
                }
                return s.createElement(c.default, null, this.props.connectDropTarget(s.createElement("div", null, s.createElement(r.default, {subheader: s.createElement(l.default, {onContextMenu: this.rootMenu}, "报名表单结构")}, a), s.createElement(o.default, {
                    anchorReference: "anchorPosition",
                    anchorPosition: this.state.anchorPosition,
                    open: !!this.state.anchorPosition,
                    onContextMenu: this.reContextMenu,
                    onClose: this.menuClose
                }, s.createElement(d.default, {onClick: this.copy}, "复制"), s.createElement(d.default, {onClick: this.paste}, "粘贴")))))
            }
        }))
    }, QeBL: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const s = a("q1tI"), i = a("SUMQ"), n = a("YDiY"), r = a("1OZW"), l = a("0G56"), o = a("Sk/v"), d = a("SNP2"),
            c = a("/xgX"), u = a("C+zi"), m = a("3ZzI"), h = a("1IiC"), p = a("5PQa"), f = a("n5s8"), g = a("2VVu"),
            v = a("nwgO"), E = a("6ZaM"), y = a("Ti5m"), I = a("1waj"), b = a("8C4M"), x = a("hQyO"), N = a("9qBj"),
            C = a("vWoE"), S = a("dTlG"), w = a("zQ7x");
        t.default = i.withStyles(e = > ({
            root: {height: "100vh", overflowY: "hidden"},
            scrollContent: {height: "100vh", overflowY: "auto"},
            titleContent: {width: "100vw", position: "fixed", left: 0},
            title: {display: "flex", alignItems: "center", paddingRight: e.spacing.unit},
            titleMain: {flexGrow: 1},
            appBarSpacer: e.mixins.toolbar,
            listOverLayer: {
                position: "fixed",
                top: 0,
                width: "25%",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            },
            editOverLayer: {
                position: "fixed",
                top: 0,
                width: "50%",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            },
            list: {backgroundColor: "#eeeeee"},
            info: {color: e.palette.grey[500], userSelect: "none"}
        })
    )
        (class extends s.Component {
            constructor(e) {
                super(e), this.load = (e = > {fetch(N.default.hostName + "/admin/activity",
                {
                    mode:N.default.corsType, cache
                :
                    "no-cache"
                }
            ).
                then(e = > {if(
                !e.ok
            )
                throw e.status;
                return e.json()
            }).
                then(t = > {this.setState({listLoading: !1, activities: t}), e && e()
            }).
                catch(e = > {console.log(e), alert("无法获取活动列表\n请联系科协技术部"
            )
            })
            }),
                this.handleGo = (e = > {
                    this
                    .state.dirty ? this.setState({
                        openDialog: !0,
                        reason: "切换活动",
                        tempId: `activity/${e}`
                    }) : this.go(`activity/${e}`)
                }
            ),
                this.go = (e = > {"login" === e && fetch(N.default.hostName + "/logout", {
                    mode: N.default.corsType,
                    cache: "no-cache"
                }), this.props.history.replace("/" + e)
            }),
                this.handleSure = (() = > {
                    this
                    .go(this.state.tempId),
                    this
                    .setState({create: "-" == this.state.tempId[9], dirty: !1, openDialog: !1, tempId: "_"})
                }
            ),
                this.handleClose = (() = > {this.setState({openDialog: !1, tempId: "_"})}
            ),
                this.handleMenuOpen = (e = > {this.setState({anchorEl: e.currentTarget})}
            ),
                this.handleMenuClose = (() = > {this.setState({anchorEl: void 0})}
            ),
                this.handleDirty = (() = > {this.setState({dirty: !0})}
            ),
                this.removeNewItem = (() = > {this.state.removeNewItem && this.state.removeNewItem()}
            ),
                this.handleRemoveNewItem = (e = > {this.setState({removeNewItem: e})}
            ),
                this.handleData = (e = > {this.setState({getData: e})}
            ),
                this.create = (() = > {this.setState({create: !0}), this.handleGo(`-${(new Date).getTime()}`)}
            ),
                this.save = (() = > {if(
                !this.state.getData
            )
                return void alert("技术故障\n请联系科协技术部");
                let e = this.state.getData(),
                    t = {name: e.name, startTime: e.startTime, endTime: e.endTime, items: e.items};
                this.state.create ? fetch(`${N.default.hostName}/admin/activity`, {
                    method: "POST",
                    mode: N.default.corsType,
                    cache: "no-cache",
                    headers: {"Content-Type": "application/json; charset=UTF-8"},
                    body: JSON.stringify(t)
                }).then(e = > {if(!e.ok
            )
                throw e.status;
                return e.json()
            }).
                then(e = > {
                    this
                    .setState({listLoading: !0, create: !1, dirty: !1}),
                    this
                    .load(() = > {this.handleGo(e.id)}
            )
            }).
                catch(e = > {console.log(e), alert("提交报名信息失败\n请联系科协技术部"
            )
            }):
                fetch(`${N.default.hostName}/admin/activity/${e.id}`, {
                    method: "PUT",
                    mode: N.default.corsType,
                    cache: "no-cache",
                    headers: {"Content-Type": "application/json; charset=UTF-8"},
                    body: JSON.stringify(t)
                }).then(e = > {if(
                !e.ok
            )
                throw e.status;
                this.setState({listLoading: !0, dirty: !1}), this.load()
            }).
                catch(e = > {console.log(e), alert("修改报名信息失败\n请联系科协技术部"
            )
            })
            }),
                this.logout = (() = > {
                    this
                    .setState({anchorEl: void 0}),
                    this
                    .state.dirty ? this.setState({openDialog: !0, reason: "注销", tempId: "login"}) : this.go("login")
                }
            ),
                this.canEdit = (() = > {let e = this.state.activities.find(e = > e.id === this.props.match.params.id
            )
                ;
                return !e || 0 === e.status
            }),
                this.copy = (e = > {this.setState({clipboard: e})}
            ),
                this.paste = (() = > this.state.clipboard
            ),
                this.state = {
                    listLoading: !0,
                    anchorEl: void 0,
                    activities: [],
                    create: !1,
                    dirty: !1,
                    openDialog: !1,
                    reason: "",
                    tempId: "_",
                    clipboard: []
                }
            }

            componentDidMount() {
                window.onbeforeunload = (e = > this.state.dirty ? (e && (e.returnValue = "编辑区的内容尚未保存"), "编辑区的内容尚未保存") : null
            ),
                this.load()
            }

            render() {
                const e = this.props.classes;
                return s.createElement("div", null, s.createElement(n.default, null, s.createElement(g.default, null, s.createElement(m.default, {
                    container: !0,
                    className: e.titleContent
                }, s.createElement(m.default, {
                    item: !0,
                    sm: 3,
                    className: e.title
                }, s.createElement(b.default, null), s.createElement(E.default, {
                    variant: "h6",
                    color: "inherit",
                    className: e.titleMain
                }, "活动列表"), s.createElement(v.default, {
                    title: "新建报名",
                    placement: "bottom"
                }, s.createElement("div", null, s.createElement(h.default, {
                    color: "inherit",
                    onClick: this.create
                }, s.createElement(I.default, null))))), s.createElement(m.default, {
                    item: !0,
                    sm: 6,
                    className: e.title
                }, s.createElement(b.default, null), s.createElement(E.default, {
                    variant: "h6",
                    color: "inherit",
                    className: e.titleMain
                }, "编辑区"), s.createElement(v.default, {
                    title: "保存",
                    placement: "bottom"
                }, s.createElement("div", null, s.createElement(h.default, {
                    color: "inherit",
                    onClick: this.save,
                    disabled: !this.canEdit()
                }, s.createElement(x.default, null))))), s.createElement(m.default, {
                    item: !0,
                    sm: 3,
                    className: e.title
                }, s.createElement(b.default, null), s.createElement(E.default, {
                    variant: "h6",
                    color: "inherit",
                    className: e.titleMain
                }, "工具箱"), s.createElement(h.default, {
                    color: "inherit",
                    onClick: this.handleMenuOpen
                }, s.createElement(y.default, null)), s.createElement(p.default, {
                    anchorEl: this.state.anchorEl,
                    anchorOrigin: {vertical: "top", horizontal: "right"},
                    transformOrigin: {vertical: "top", horizontal: "right"},
                    open: !!this.state.anchorEl,
                    onClose: this.handleMenuClose
                }, s.createElement(f.default, {onClick: this.logout}, "注销")))))), s.createElement(m.default, {
                    container: !0,
                    className: e.root
                }, s.createElement(m.default, {
                    item: !0,
                    sm: 3,
                    className: e.scrollContent + " " + e.list
                }, s.createElement("div", {className: e.appBarSpacer}), this.state.activities.map(e = > s.createElement(C.default, {
                    activity: e,
                    currentId: this.props.match.params.id,
                    key: e.id,
                    go: this.handleGo,
                    refresh: this.load
                })), this.state.listLoading && s.createElement("div", {className: e.listOverLayer}, s.createElement("div", {className: "line-scale"}, s.createElement("div", null), s.createElement("div", null), s.createElement("div", null), s.createElement("div", null), s.createElement("div", null)))), s.createElement(m.default, {
                    item: !0,
                    sm: 6,
                    className: e.scrollContent
                }, s.createElement("div", {className: e.appBarSpacer}), "_" === this.props.match.params.id ? s.createElement("div", {className: e.editOverLayer}, s.createElement(E.default, {
                    variant: "h4",
                    className: e.info
                }, "没有选中任何活动")) : s.createElement(S.default, {
                    key: this.props.match.params.id,
                    activity: this.state.activities.find(e = > e.id === this.props.match.params.id) || {
                    id: "-",
                    name: "",
                    publisher: "",
                    status: 0
                }, dirty
            :
                this.handleDirty, disabled
            :
                !this.canEdit(), removeNewItemHandle
            :
                this.handleRemoveNewItem, dataHandle
            :
                this.handleData, copy
            :
                this.copy, paste
            :
                this.paste
            })),
                s.createElement(m.default, {
                    item: !0,
                    sm: 3,
                    className: e.scrollContent + " " + e.list
                }, s.createElement("div", {className: e.appBarSpacer}), s.createElement(w.default, {
                    disabled: "_" === this.props.match.params.id || !this.canEdit(),
                    removeNewItem: this.removeNewItem
                }))
            ),
                s.createElement(l.default, {
                    open: this.state.openDialog,
                    onClose: this.handleClose
                }, s.createElement(u.default, {id: "alert-dialog-title"}, "编辑的内容尚未保存！"), s.createElement(d.default, null, s.createElement(c.default, {id: "alert-dialog-description"}, "编辑的内容尚未保存，如果", this.state.reason, "，将失去全部的已编辑数据。是否仍然要", this.state.reason, "？")), s.createElement(o.default, null, s.createElement(r.default, {
                    onClick: this.handleClose,
                    color: "primary",
                    autoFocus: !0
                }, "取消"), s.createElement(r.default, {
                    onClick: this.handleSure,
                    color: "primary"
                }, "仍要", this.state.reason)))
            )
            }
        })
    }, SAaC: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const s = a("q1tI"), i = a("SUMQ"), n = a("r1Q0"), r = a("1IiC"), l = a("NABS"), o = a("zOyN"), d = a("4eE1"),
            c = a("ZqOF"), u = a("6ZaM"), m = a("FrwU"), h = a("KwhB"), p = a("MPUk"), f = a("P9b8"), g = a("9qBj");
        const v = {beginDrag: e = > (e.fold(e.fromItem.id), {
            id: e.fromItem.id,
            originIndex: e.getIndex(e.fromItem.id),
            type: e.fromItem.extension
        }), canDrag
    :
        e =
    >
        !e.disabled, endDrag(e, t)
        {
            const {id: a, originIndex: s} = t.getItem();
            t.didDrop() || e.moveItem(a, s), e.unfold()
        }
    }
        ;const E = {canDrop: () = > !1, hover
        (e, t)
        {
            -1 == t.getItem().id && e.addItem(t.getItem());
            const {id: a} = t.getItem(), s = e.fromItem.id;
            if (a !== s) {
                const t = e.getIndex(s);
                e.moveItem(a, t)
            }
        }
    }
        ;t.default = i.withStyles(e = > ({
            hover: {backgroundColor: n.grey[100]},
            dragger: {cursor: "move"},
            draggerDisabled: {cursor: "not-allowed"},
            name: {display: "flex", alignItems: "center"}
        })
    )
        (f.DropTarget(g.default.DragDropConst, E, function (e) {
            return {connectDropTarget: e.dropTarget()}
        })(f.DragSource(g.default.DragDropConst, v, function (e, t) {
            return {connectDragPreview: e.dragPreview(), connectDragSource: e.dragSource(), isDragging: t.isDragging()}
        })(class extends s.Component {
            constructor(e) {
                super(e), this.handleEnter = (() = > {this.setState({hover: !0})}
            ),
                this.handleLeave = (() = > {this.setState({hover: !1})}
            ),
                this.change = (e = > {this.props.nameUpdate(this.props.fromItem.id, e.target.value)}
            ),
                this.delete = (() = > {this.props.delete(this.props.fromItem.id)}
            ),
                this.edit = (() = > {this.setState({nameEdit: !0})}
            ),
                this.blur = (() = > {this.setState({nameEdit: !1})}
            ),
                this.menu = (e = > {
                    e
                    .preventDefault(),
                    console
                    .log(e.clientX, e.clientY),
                    this
                    .props.contextMenu(this.props.fromItem.id, {left: e.clientX, top: e.clientY}),
                    this
                    .setState({hover: !1})
                }
            ),
                this.state = {hover: !1, nameEdit: !1}
            }

            render() {
                const e = this.props.classes;
                return this.props.connectDragPreview(this.props.connectDropTarget(s.createElement("div", {onContextMenu: this.menu}, s.createElement(l.default, {
                    onMouseEnter: this.handleEnter,
                    onMouseLeave: this.handleLeave,
                    className: this.state.hover ? e.hover : ""
                }, this.props.connectDragSource(s.createElement("div", null, s.createElement(o.default, null, s.createElement(h.default, {className: this.props.disabled ? e.draggerDisabled : e.dragger})))), s.createElement(r.default, {
                    onClick: this.edit,
                    disabled: this.props.disabled
                }, s.createElement(p.default, null)), s.createElement(d.default, null, s.createElement(u.default, {
                    className: e.name,
                    component: "div"
                }, "分组 : ", this.state.nameEdit ? s.createElement(c.default, {
                    autoFocus: !0,
                    value: this.props.fromItem.name,
                    onBlur: this.blur,
                    onChange: this.change
                }) : this.props.fromItem.name)), s.createElement(r.default, {
                    onClick: this.delete,
                    disabled: this.props.disabled
                }, s.createElement(m.default, null))))))
            }
        })))
    }, "c+yx": function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const s = a("9qBj");
        t.Back2Front = function e(t) {
            let a = s.default.extensionDesc[t.extension], i = [{
                id: -1,
                extension: t.extension,
                name: t.name,
                type: t.type,
                unique: t.unique,
                defaultValue: t.defaultValue || "",
                description: t.description,
                tip: t.tip,
                require: t.require,
                case: t.case,
                useRange: null != t.range,
                range: t.range || [0, 0],
                groupTo: void 0,
                caseEditable: a.caseEditable,
                rangeName: a.rangeName
            }];
            if ("group" === t.extension) {
                i[0].type = "begin";
                for (let a of t.subItem) i = i.concat(e(a));
                let s = {
                    id: -1,
                    extension: t.extension,
                    name: t.name,
                    type: "end",
                    unique: t.unique,
                    defaultValue: t.defaultValue || "",
                    description: t.description,
                    tip: t.tip,
                    require: t.require,
                    case: t.case,
                    useRange: null != t.range,
                    range: t.range || [0, 0],
                    groupTo: void 0,
                    caseEditable: a.caseEditable,
                    rangeName: a.rangeName
                };
                i[0].groupTo = s, i.push(s)
            }
            return i
        }, t.Front2Back = function e(t, a) {
            let s = [];
            for (let i = a; i < t.length; i++) {
                let a = t[i], n = {
                    extension: a.extension,
                    name: a.name,
                    type: a.type,
                    unique: a.unique,
                    defaultValue: a.defaultValue || void 0,
                    description: a.description,
                    tip: a.tip,
                    require: a.require,
                    case: a.caseEditable ? a.case : void 0,
                    range: a.useRange ? a.range : void 0,
                    subItem: void 0
                };
                if ("group" == a.extension) {
                    if ("end" === a.type) break;
                    "begin" === a.type && (n.type = "group", n.subItem = e(t, i + 1), i += n.subItem.length + 1)
                }
                s.push(n)
            }
            return s
        }, t.transToXlsx = function (e) {
            let t = [{key: "id", value: e.id}];
            t.push(...function
            e(t, a)
            {
                let s = [];
                for (let i of Object.keys(a)) switch (typeof a[i]) {
                    case"string":
                        s.push({key: t + i, value: a[i]});
                        break;
                    case"number":
                        s.push({key: i, value: a[i].toString()});
                        break;
                    case"object":
                        s.push(...e(i + " > ", a[i])
                    )
                }
                return s
            }
            ("", e.data)
        )
            ;let a = {};
            for (let e of t) a[e.key] = e.value;
            return a
        }
    }, dTlG: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const s = a("q1tI"), i = a("RsOY"), n = a("JAUK"), r = a("SUMQ"), l = a("JOJA"), o = a("1IiC"), d = a("pPbJ"),
            c = a("zfCH"), u = a("ZqOF"), m = a("6ZaM"), h = a("NDbl"), p = a("MPUk"), f = a("9qBj"), g = a("c+yx"),
            v = a("26Q4"), E = a("FYhD");
        t.default = r.withStyles(e = > ({
            root: {padding: 2 * e.spacing.unit},
            activityEditor: {padding: 2 * e.spacing.unit},
            titleContent: {display: "flex", alignItems: "center", height: 48},
            title: {flexGrow: 1},
            input: {fontSize: "1.25rem", display: "flex", flexDirection: "column"},
            timeContent: {display: "flex"},
            time: {flexGrow: 1, display: "flex", flexDirection: "column"},
            controlList: {marginTop: 2 * e.spacing.unit},
            loading: {marginTop: 2 * e.spacing.unit, display: "flex", flexDirection: "column", alignItems: "center"}
        })
    )
        (class extends s.Component {
            constructor(e) {
                super(e), this.titleEdit = (() = > {this.setState({titleEdit: !0})}
            ),
                this.titleChange = (e = > {
                    this
                    .setState({activity: i.default(this.state.activity, {name: {$set: e.target.value}})}),
                    this
                    .props.dirty()
                }
            ),
                this.titleBlur = (() = > {this.setState({titleEdit: !1})}
            ),
                this.timeUse = (e = > {"start" === e.target.value ? this.setState({startUsed: !this.state.startUsed}) : "end" === e.target.value && this.setState({endUsed: !this.state.endUsed}), this.props.dirty()
            }),
                this.startTimeChange = (e = > {
                    this
                    .setState({activity: i.default(this.state.activity, {startTime: {$set: e.format("YYYY-MM-DD HH:mm:ss")}})}),
                    this
                    .props.dirty()
                }
            ),
                this.endTimeChange = (e = > {
                    this
                    .setState({activity: i.default(this.state.activity, {endTime: {$set: e.format("YYYY-MM-DD HH:mm:ss")}})}),
                    this
                    .props.dirty()
                }
            ),
                this.ActivityData = (() = > ({
                    id: this.state.activity.id,
                    name: this.state.activity.name,
                    startTime: this.state.startUsed ? this.state.activity.startTime : void 0,
                    endTime: this.state.endUsed ? this.state.activity.endTime : void 0,
                    items: this.state.getData ? this.state.getData() : []
                })
            ),
                this.handleData = (e = > {this.setState({getData: e})}
            ),
                this.state = {
                    loading: !0,
                    activity: e.activity,
                    titleEdit: !1,
                    startUsed: !!e.activity.startTime,
                    endUsed: !!e.activity.endTime,
                    items: []
                }
            }

            componentDidMount() {
                if ("-" === this.props.activity.id) return this.props.dataHandle(this.ActivityData), void this.setState({loading: !1});
                fetch(`${f.default.hostName}/admin/activity/${this.props.activity.id}`, {
                    mode: f.default.corsType,
                    cache: "no-cache"
                }).then(e = > {if(
                !e.ok
            )
                throw e.status;
                return e.json()
            }).
                then(e = > {
                    this
                    .props.dataHandle(this.ActivityData),
                    this
                    .setState({loading: !1, items: e.reduce((e, t) = > e.concat(g.Back2Front(t)), [])
                }
            )
            }).
                catch(e = > {console.log(e), alert("无法获取报名格式\n请联系科协技术部"
            )
            })
            }

            render() {
                const e = this.props.classes;
                return s.createElement("div", {className: e.root}, s.createElement(d.default, {className: e.activityEditor}, s.createElement("div", {className: e.titleContent}, s.createElement(m.default, {
                    variant: "h6",
                    className: e.title
                }, this.state.titleEdit ? s.createElement(u.default, {
                    autoFocus: !0,
                    className: e.input,
                    value: this.state.activity.name,
                    onBlur: this.titleBlur,
                    onChange: this.titleChange
                }) : this.state.activity.name), !this.state.titleEdit && s.createElement(o.default, {
                    onClick: this.titleEdit,
                    disabled: this.props.disabled
                }, s.createElement(p.default, null))), s.createElement(h.MuiPickersUtilsProvider, {utils: n.default}, s.createElement("div", {className: e.timeContent}, s.createElement("div", {className: e.time}, s.createElement(l.default, {
                    label: "报名开始时间",
                    control: s.createElement(c.default, {
                        checked: this.state.startUsed,
                        onChange: this.timeUse,
                        value: "start",
                        disabled: this.props.disabled
                    })
                }), s.createElement("div", null, s.createElement(h.DateTimePicker, {
                    disabled: !this.state.startUsed || this.props.disabled,
                    value: this.state.activity.startTime,
                    onChange: this.startTimeChange,
                    format: "YYYY-MM-DD HH:mm:ss"
                }))), s.createElement("div", {className: e.time}, s.createElement(l.default, {
                    label: "报名截止时间",
                    control: s.createElement(c.default, {
                        checked: this.state.endUsed,
                        onChange: this.timeUse,
                        value: "end",
                        disabled: this.props.disabled
                    })
                }), s.createElement("div", null, s.createElement(h.DateTimePicker, {
                    disabled: !this.state.endUsed || this.props.disabled,
                    value: this.state.activity.endTime,
                    onChange: this.endTimeChange,
                    format: "YYYY-MM-DD HH:mm:ss"
                })))))), this.state.activity.status > 0 && s.createElement(v.default, {
                    finish: 3 == this.state.activity.status,
                    activityId: this.state.activity.id
                }), s.createElement("div", {className: e.controlList}, this.state.loading ? s.createElement("div", {className: e.loading}, s.createElement("div", {className: "line-scale"}, s.createElement("div", null), s.createElement("div", null), s.createElement("div", null), s.createElement("div", null), s.createElement("div", null))) : s.createElement(E.default, {
                    formItems: this.state.items,
                    dirty: this.props.dirty,
                    disabled: this.props.disabled,
                    removeNewItemHandle: this.props.removeNewItemHandle,
                    dataHandle: this.handleData,
                    copy: this.props.copy,
                    paste: this.props.paste
                })))
            }
        })
    }, eHdI: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const s = a("q1tI"), i = a("SUMQ"), n = a("r1Q0"), r = a("1IiC"), l = a("NABS"), o = a("4eE1"), d = a("FrwU"),
            c = i.createStyles({hover: {backgroundColor: n.grey[300]}});
        t.default = i.withStyles(c)(class extends s.Component {
            constructor(e) {
                super(e), this.enter = (() = > {this.setState({hover: !0})}
            ),
                this.leave = (() = > {this.setState({hover: !1})}
            ),
                this.remove = (() = > {this.props.remove(this.props.value)}
            ),
                this.state = {hover: !1}
            }

            render() {
                const e = this.props.classes;
                return s.createElement(l.default, {
                    className: this.state.hover ? e.hover : "",
                    onMouseEnter: this.enter,
                    onMouseLeave: this.leave
                }, s.createElement(o.default, null, this.props.value), s.createElement(r.default, {
                    onClick: this.remove,
                    disabled: this.props.disabled
                }, s.createElement(d.default, null)))
            }
        })
    }, gUs0: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        t.default = {text: e = > ({
            id: e,
            extension: "text",
            name: "",
            type: "text",
            defaultValue: "",
            unique: !1,
            description: "",
            tip: "",
            require: !1,
            caseEditable: !1,
            rangeName: "字数",
            range: [],
            useRange: !1
        }), number
    :
        e =
    >
        ({
            id: e,
            extension: "number",
            name: "",
            type: "number",
            defaultValue: "0",
            unique: !1,
            description: "",
            tip: "",
            require: !1,
            caseEditable: !1,
            rangeName: "值",
            range: [],
            useRange: !1
        }), radio
    :
        e =
    >
        ({
            id: e,
            extension: "radio",
            name: "",
            type: "radio",
            defaultValue: "",
            unique: !1,
            description: "",
            tip: "",
            require: !1,
            caseEditable: !0,
            case: [],
            rangeName: "",
            range: [],
            useRange: !1
        }), checkbox
    :
        e =
    >
        ({
            id: e,
            extension: "checkbox",
            name: "",
            type: "checkbox",
            defaultValue: "",
            unique: !1,
            description: "",
            tip: "",
            require: !1,
            caseEditable: !0,
            case: [],
            rangeName: "选择项数",
            range: [],
            useRange: !1
        }), date
    :
        e =
    >
        ({
            id: e,
            extension: "date",
            name: "",
            type: "date",
            defaultValue: "",
            unique: !1,
            description: "",
            tip: "",
            require: !1,
            caseEditable: !1,
            rangeName: "日期",
            range: [],
            useRange: !1
        }), textarea
    :
        e =
    >
        ({
            id: e,
            extension: "textarea",
            name: "",
            type: "textarea",
            defaultValue: "",
            unique: !1,
            description: "",
            tip: "",
            require: !1,
            caseEditable: !1,
            rangeName: "字数",
            range: [],
            useRange: !1
        }), group
    :
        e =
    >
        ({
            id: e,
            extension: "group",
            name: "",
            type: "",
            defaultValue: "",
            unique: !1,
            description: "",
            tip: "",
            require: !1,
            caseEditable: !1,
            rangeName: "",
            range: [],
            useRange: !1
        }), personName
    :
        e =
    >
        ({
            id: e,
            extension: "personName",
            name: "姓名",
            type: "text",
            defaultValue: "",
            unique: !1,
            description: "",
            tip: "请输入姓名",
            require: !0,
            caseEditable: !1,
            rangeName: "姓名长度",
            range: [2, 20],
            useRange: !0
        }), teamName
    :
        e =
    >
        ({
            id: e,
            extension: "teamName",
            name: "队伍名称",
            type: "text",
            defaultValue: "",
            unique: !0,
            description: "",
            tip: "请输入队伍名称",
            require: !0,
            caseEditable: !1,
            rangeName: "队名长度",
            range: [1, 100],
            useRange: !1
        }), sex
    :
        e =
    >
        ({
            id: e,
            extension: "sex",
            name: "性别",
            type: "sex",
            defaultValue: "",
            unique: !1,
            description: "",
            tip: "请选择性别",
            require: !0,
            caseEditable: !1,
            case: ["男", "女"],
            rangeName: "",
            range: [],
            useRange: !1
        }), nation
    :
        e =
    >
        ({
            id: e,
            extension: "nation",
            name: "民族",
            type: "nation",
            defaultValue: "汉族",
            unique: !1,
            description: "",
            tip: "请选择民族",
            require: !0,
            caseEditable: !1,
            rangeName: "",
            range: [],
            useRange: !1
        }), political
    :
        e =
    >
        ({
            id: e,
            extension: "political",
            name: "政治面貌",
            type: "radio",
            defaultValue: "",
            unique: !1,
            description: "",
            tip: "请选择政治面貌",
            require: !0,
            caseEditable: !0,
            case: ["群众", "团员", "预备党员", "党员"],
            rangeName: "",
            range: [],
            useRange: !1
        }), studentNumber
    :
        e =
    >
        ({
            id: e,
            extension: "studentNumber",
            name: "学号",
            type: "studentNumber",
            defaultValue: "",
            unique: !0,
            description: "",
            tip: "请输入学号",
            require: !0,
            caseEditable: !1,
            rangeName: "",
            range: [],
            useRange: !1
        }), phone
    :
        e =
    >
        ({
            id: e,
            extension: "phone",
            name: "手机号",
            type: "phone",
            defaultValue: "",
            unique: !0,
            description: "",
            tip: "请输入手机号",
            require: !1,
            caseEditable: !1,
            rangeName: "",
            range: [],
            useRange: !1
        }), qq
    :
        e =
    >
        ({
            id: e,
            extension: "qq",
            name: "QQ号",
            type: "qq",
            defaultValue: "",
            unique: !0,
            description: "",
            tip: "请输入QQ号",
            require: !1,
            caseEditable: !1,
            rangeName: "",
            range: [],
            useRange: !1
        }), email
    :
        e =
    >
        ({
            id: e,
            extension: "email",
            name: "电子邮箱",
            type: "email",
            defaultValue: "",
            unique: !0,
            description: "",
            tip: "请输入邮箱",
            require: !1,
            caseEditable: !1,
            rangeName: "",
            range: [],
            useRange: !1
        }), idcard
    :
        e =
    >
        ({
            id: e,
            extension: "idcard",
            name: "身份证号",
            type: "idcard",
            defaultValue: "",
            unique: !0,
            description: "",
            tip: "请输入身份证号",
            require: !0,
            caseEditable: !1,
            rangeName: "",
            range: [],
            useRange: !1
        }), GPA
    :
        e =
    >
        ({
            id: e,
            extension: "GPA",
            name: "GPA",
            type: "GPA",
            defaultValue: "",
            unique: !1,
            description: "",
            tip: "",
            require: !0,
            caseEditable: !1,
            rangeName: "GPA",
            range: [0, 4],
            useRange: !1
        }), rank
    :
        e =
    >
        ({
            id: e,
            extension: "rank",
            name: "排名",
            type: "number",
            defaultValue: "",
            unique: !1,
            description: "",
            tip: "",
            require: !0,
            caseEditable: !1,
            rangeName: "排名",
            range: [1, 1e4],
            useRange: !1
        })
    }
    }, jRni: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const s = a("q1tI"), i = a("SUMQ"), n = a("QGGi"), r = a("1OZW"), l = a("1DzM"), o = a("1IiC"), d = a("MwB+"),
            c = a("cUz1"), u = a("ctcd"), m = a("n5s8"), h = a("pPbJ"), p = a("XdPI"), f = a("6ZaM"), g = a("LQxU"),
            v = a("7frF"), E = a("CRf/"), y = a("9qBj");
        t.default = i.withStyles(e = > ({
            root: {
                width: "100vw",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            },
            content: {
                position: "relative",
                padding: 4 * e.spacing.unit,
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            },
            avatar: {margin: e.spacing.unit, backgroundColor: e.palette.secondary.main},
            formControl: {margin: e.spacing.unit, width: 240},
            overOuter: {position: "absolute", top: 0, width: "100%", height: "100%", padding: 10},
            overInner: {
                width: "100%",
                height: "100%",
                backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }
        })
    )
        (class extends s.Component {
            constructor(e) {
                super(e), this.handleUsernameChange = (e = > {this.setState({username: e.target.value})}
            ),
                this.handlePasswordChange = (e = > {this.setState({password: e.target.value})}
            ),
                this.toggleVisibility = (() = > {this.setState({visibility: !this.state.visibility})}
            ),
                this.handlLogin = (e = > {
                    e
                    .preventDefault(),
                    "" !== this.state.username ? fetch(y.default.hostName + "/login", {
                    method: "POST",
                    mode: y.default.corsType,
                    cache: "no-cache",
                    headers: {"Content-Type": "application/json; charset=UTF-8"},
                    body: JSON.stringify({username: this.state.username, password: this.state.password})
                }).then(e = > {if(!e.ok
            )
                throw e.status;
                this.props.history.replace("/activity/_")
            }).
                catch(e = > {alert(y.default.loginErrMsg(e)
            )
            }):
                alert("请选择组织")
            }),
                this.state = {loading: !0, error: "", users: [], username: "", password: "", visibility: !1}
            }

            componentDidMount() {
                this.setState({
                    loading: !0,
                    error: "",
                    users: [],
                    username: "",
                    password: ""
                }), fetch(y.default.hostName + "/user", {mode: y.default.corsType, cache: "no-cache"}).then(e = > {if(
                !e.ok
            )
                throw e.status;
                return e.json()
            }).
                then(e = > {this.setState({loading: !1, users: e})}
            ).
                catch(e = > {this.setState({error: e.toString()})}
            )
            }

            render() {
                const e = this.props.classes;
                return s.createElement("div", {className: e.root}, s.createElement(h.default, null, s.createElement("form", {
                    onSubmit: this.handlLogin,
                    className: e.content,
                    autoComplete: "off"
                }, s.createElement(n.default, {className: e.avatar}, s.createElement(g.default, null)), s.createElement(l.default, {
                    className: e.formControl,
                    required: !0
                }, s.createElement(u.default, {htmlFor: "username"}, "组织"), s.createElement(p.default, {
                    value: this.state.username,
                    onChange: this.handleUsernameChange,
                    inputProps: {name: "username", id: "username"}
                }, s.createElement(m.default, {value: ""}, s.createElement("em", null, "(缺省)")), this.state.users.map(e = > s.createElement(m.default, {
                    key: e.id,
                    value: e.name
                }, e.name)))), s.createElement(l.default, {
                    className: e.formControl,
                    required: !0
                }, s.createElement(u.default, {htmlFor: "password"}, "密码"), s.createElement(d.default, {
                    id: "password",
                    type: this.state.visibility ? "text" : "password",
                    value: this.state.password,
                    onChange: this.handlePasswordChange,
                    endAdornment: s.createElement(c.default, {position: "end"}, s.createElement(o.default, {onClick: this.toggleVisibility}, this.state.visibility ? s.createElement(v.default, null) : s.createElement(E.default, null)))
                })), s.createElement(l.default, {className: e.formControl}, s.createElement(r.default, {
                    variant: "contained",
                    color: "primary",
                    type: "submit"
                }, "登录")), this.state.loading && s.createElement("div", {className: e.overOuter}, s.createElement("div", {className: e.overInner}, "" === this.state.error && s.createElement("div", {className: "ball-scale-ripple-multiple"}, s.createElement("div", null), s.createElement("div", null), s.createElement("div", null)), this.state.error && s.createElement(f.default, {variant: "h4"}, ":("), this.state.error && s.createElement(f.default, {variant: "h6"}, "登录信息加载失败", s.createElement("br", null), "请联系科协技术部")))))
            )
            }
        })
    }, o1PW: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const s = a("q1tI"), i = a("SUMQ"), n = a("r1Q0"), r = a("1DzM"), l = a("JOJA"), o = a("tc3z"), d = a("3ZzI"),
            c = a("1IiC"), u = a("MwB+"), m = a("cUz1"), h = a("ctcd"), p = a("JgXy"), f = a("NABS"), g = a("zOyN"),
            v = a("4eE1"), E = a("pPbJ"), y = a("n5s8"), I = a("XdPI"), b = a("zfCH"), x = a("ZqOF"), N = a("1waj"),
            C = a("FrwU"), S = a("KwhB"), w = a("AUy9"), D = a("8C4M"), q = a("Ei1D"), k = a("P9b8"), M = a("9qBj"),
            P = a("eHdI");
        const T = {beginDrag: e = > ({
            id: e.fromItem.id,
            originIndex: e.getIndex(e.fromItem.id),
            type: e.fromItem.extension
        }), canDrag
    :
        e =
    >
        !e.disabled, endDrag(e, t)
        {
            const {id: a, originIndex: s} = t.getItem();
            t.didDrop() || e.moveItem(a, s)
        }
    }
        ;const U = {canDrop: () = > !1, hover
        (e, t)
        {
            -1 == t.getItem().id && e.addItem(t.getItem());
            const {id: a} = t.getItem(), s = e.fromItem.id;
            if (a !== s) {
                const t = e.getIndex(s);
                e.moveItem(a, t)
            }
        }
    }
        ;t.default = i.withStyles(e = > ({
            hover: {backgroundColor: n.grey[100]},
            dragger: {cursor: "move"},
            draggerDisabled: {cursor: "not-allowed"},
            content: {backgroundColor: n.grey[100], padding: `${2 * e.spacing.unit}px ${4 * e.spacing.unit}px`},
            itemContent: {display: "flex", flexDirection: "column", paddingRight: 4 * e.spacing.unit},
            caseContent: {
                marginTop: 2 * e.spacing.unit,
                paddingTop: e.spacing.unit,
                display: "flex",
                flexDirection: "column"
            },
            caseInput: {marginLeft: 2 * e.spacing.unit, marginRight: 2 * e.spacing.unit}
        })
    )
        (k.DropTarget(M.default.DragDropConst, U, function (e) {
            return {connectDropTarget: e.dropTarget()}
        })(k.DragSource(M.default.DragDropConst, T, function (e, t) {
            return {connectDragPreview: e.dragPreview(), connectDragSource: e.dragSource(), isDragging: t.isDragging()}
        })(class extends s.Component {
            constructor(e) {
                super(e), this.handleEnter = (() = > {this.setState({hover: !0})}
            ),
                this.handleLeave = (() = > {this.setState({hover: !1})}
            ),
                this.toogleExpand = (() = > {this.setState({expand: !this.state.expand})}
            ),
                this.handleAddCase = (e = > {this.setState({addCase: e.target.value, addCaseError: ""})}
            ),
                this.inputUpdate = (e = > {this.props.update(this.props.fromItem.id, e.target.name, e.target.value)}
            ),
                this.switchUpdate = (e = > {this.props.update(this.props.fromItem.id, e.target.value, e.target.checked)}
            ),
                this.rangeUpdate = (e = > {let t = this.props.fromItem.range;
                "minValue" === e.target.id ? t[0] = parseInt(e.target.value) : "maxValue" === e.target.id && (t[1] = parseInt(e.target.value)), this.props.update(this.props.fromItem.id, "range", t)
            }),
                this.delete = (() = > {this.props.delete(this.props.fromItem.id)}
            ),
                this.caseAdd = (() = > {
                    this
                    .props.fromItem.case.indexOf(this.state.addCase) >= 0 ? this.setState({addCaseError: "已经存在这个选项"}) : (this.props.caseAdd(this.props.fromItem.id, this.state.addCase), this.setState({addCase: ""}))
                }
            ),
                this.caseRemove = (e = > {let t = this.props.fromItem.case.indexOf(e);
                this.props.caseRemove(this.props.fromItem.id, t)
            }),
                this.caseReset = (() = > {
                    this
                    .props.update(this.props.fromItem.id, "case", M.default.defaultCase(this.props.fromItem.extension))
                }
            ),
                this.menu = (e = > {
                    e
                    .preventDefault(),
                    console
                    .log(e.clientX, e.clientY),
                    this
                    .props.contextMenu(this.props.fromItem.id, {left: e.clientX, top: e.clientY}),
                    this
                    .setState({hover: !1})
                }
            ),
                this.state = {hover: !1, expand: !1, addCase: "", addCaseError: ""}
            }

            render() {
                const e = this.props.classes;
                return this.props.connectDragPreview(this.props.connectDropTarget(s.createElement("div", {onContextMenu: this.menu}, s.createElement(f.default, {
                    onMouseEnter: this.handleEnter,
                    onMouseLeave: this.handleLeave,
                    className: this.state.hover ? e.hover : ""
                }, this.props.connectDragSource(s.createElement("div", null, s.createElement(g.default, null, s.createElement(S.default, {className: this.props.disabled ? e.draggerDisabled : e.dragger})))), s.createElement(c.default, {onClick: this.toogleExpand}, this.state.expand ? s.createElement(w.default, null) : s.createElement(D.default, null)), s.createElement(v.default, null, M.default.extensionName[this.props.fromItem.extension], " : ", this.props.fromItem.name), s.createElement(c.default, {
                    onClick: this.delete,
                    disabled: this.props.disabled
                }, s.createElement(C.default, null))), this.state.expand && s.createElement("div", {className: e.content}, s.createElement(d.default, {container: !0}, s.createElement(d.default, {
                    item: !0,
                    xs: 12,
                    md: 6
                }, s.createElement(r.default, {
                    className: e.itemContent,
                    required: !0
                }, s.createElement(h.default, {htmlFor: "name"}, "名称"), s.createElement(u.default, {
                    id: "name",
                    name: "name",
                    required: !0,
                    value: this.props.fromItem.name,
                    onChange: this.inputUpdate,
                    disabled: this.props.disabled
                }))), s.createElement(d.default, {
                    item: !0,
                    xs: 12,
                    md: 6
                }, s.createElement(r.default, {className: e.itemContent}, s.createElement(h.default, {htmlFor: "tip"}, "填写提示"), s.createElement(u.default, {
                    id: "tip",
                    name: "tip",
                    required: !0,
                    value: this.props.fromItem.tip,
                    onChange: this.inputUpdate,
                    disabled: this.props.disabled
                }))), s.createElement(d.default, {item: !0, xs: 12, md: 6}, s.createElement(l.default, {
                    label: "是否必填",
                    control: s.createElement(b.default, {
                        checked: this.props.fromItem.require,
                        onChange: this.switchUpdate,
                        value: "require",
                        disabled: this.props.disabled
                    })
                })), s.createElement(d.default, {item: !0, xs: 12, md: 6}, s.createElement(l.default, {
                    label: "是否验证唯一性",
                    control: s.createElement(b.default, {
                        checked: this.props.fromItem.unique,
                        onChange: this.switchUpdate,
                        value: "unique",
                        disabled: this.props.disabled
                    })
                })), "" != this.props.fromItem.rangeName && s.createElement(d.default, {
                    item: !0,
                    xs: 12
                }, s.createElement(l.default, {
                    label: "是否使用范围限制",
                    control: s.createElement(b.default, {
                        checked: this.props.fromItem.useRange,
                        onChange: this.switchUpdate,
                        value: "useRange",
                        disabled: this.props.disabled
                    })
                })), "" != this.props.fromItem.rangeName && s.createElement(d.default, {
                    item: !0,
                    xs: 12,
                    md: 6
                }, s.createElement(r.default, {
                    className: e.itemContent,
                    disabled: !this.props.fromItem.useRange || this.props.disabled
                }, s.createElement(h.default, {htmlFor: "minValue"}, "最小", this.props.fromItem.rangeName), s.createElement(u.default, {
                    id: "minValue",
                    type: "number",
                    value: this.props.fromItem.range[0],
                    onChange: this.rangeUpdate
                }))), "" != this.props.fromItem.rangeName && s.createElement(d.default, {
                    item: !0,
                    xs: 12,
                    md: 6
                }, s.createElement(r.default, {
                    className: e.itemContent,
                    disabled: !this.props.fromItem.useRange || this.props.disabled
                }, s.createElement(h.default, {htmlFor: "maxValue"}, "最大", this.props.fromItem.rangeName), s.createElement(u.default, {
                    id: "maxValue",
                    type: "number",
                    value: this.props.fromItem.range[1],
                    onChange: this.rangeUpdate
                }))), s.createElement(d.default, {
                    item: !0,
                    xs: 12,
                    md: 6
                }, s.createElement(r.default, {className: e.itemContent}, s.createElement(h.default, {htmlFor: "defaultValue"}, "默认值"), null != this.props.fromItem.case ? s.createElement(I.default, {
                    value: this.props.fromItem.defaultValue,
                    onChange: this.inputUpdate,
                    disabled: this.props.disabled,
                    inputProps: {id: "defaultValue", name: "defaultValue"}
                }, s.createElement(y.default, {value: ""}, s.createElement("em", null, "无默认值")), this.props.fromItem.case.map(e = > s.createElement(y.default, {
                    value: e,
                    key: e
                }, e)))
            :
                s.createElement(u.default, {
                    id: "defaultValue",
                    name: "defaultValue",
                    value: this.props.fromItem.defaultValue,
                    onChange: this.inputUpdate,
                    disabled: this.props.disabled
                })
            ),
                this.props.fromItem.caseEditable && s.createElement("div", {className: e.itemContent}, s.createElement(E.default, {className: e.caseContent}, s.createElement(r.default, {
                    className: e.caseInput,
                    error: "" !== this.state.addCaseError
                }, s.createElement(h.default, {htmlFor: "addCase"}, "新选项"), s.createElement(u.default, {
                    id: "addCase",
                    fullWidth: !0,
                    value: this.state.addCase,
                    onChange: this.handleAddCase,
                    disabled: this.props.disabled,
                    endAdornment: s.createElement(m.default, {position: "end"}, s.createElement(c.default, {
                        disabled: "" === this.state.addCase || this.props.disabled,
                        onClick: this.caseAdd
                    }, s.createElement(N.default, null)))
                }), s.createElement(o.default, null, this.state.addCaseError)), s.createElement(p.default, null, this.props.fromItem.case.map(e = > s.createElement(P.default, {
                    value: e,
                    key: e,
                    remove: this.caseRemove,
                    disabled: this.props.disabled
                })), s.createElement(f.default, {
                    button: !0,
                    onClick: this.caseReset,
                    disabled: this.props.disabled
                }, s.createElement(g.default, null, s.createElement(q.default, null)), s.createElement(v.default, null, "重置选项"))))
            )),
                s.createElement(d.default, {
                    item: !0,
                    xs: 12,
                    md: this.props.fromItem.caseEditable ? 6 : 12
                }, s.createElement(r.default, {className: e.itemContent}, s.createElement(x.default, {
                    id: "description",
                    name: "description",
                    variant: "outlined",
                    multiline: !0,
                    placeholder: "描述",
                    margin: "normal",
                    value: this.props.fromItem.description,
                    onChange: this.inputUpdate,
                    disabled: this.props.disabled
                })))
            )))))
            }
        })))
    }, ofFZ: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const s = a("q1tI"), i = a("SUMQ"), n = a("r1Q0"), r = a("NABS"), l = a("zOyN"), o = a("4eE1"), d = a("JRjH"),
            c = a("P9b8"), u = a("9qBj"), m = i.createStyles({
                hover: {backgroundColor: n.grey[300]},
                draggerRoot: {marginRight: -16},
                dragger: {cursor: "move"},
                draggerDisabled: {cursor: "not-allowed"}
            });
        const h = {beginDrag: e = > ({id: -1, originIndex: -1, type: e.type}), canDrag
    :
        e =
    >
        !e.disabled, endDrag(e, t)
        {
            t.didDrop() || e.removeNewItem()
        }
    }
        ;t.default = i.withStyles(m)(c.DragSource(u.default.DragDropConst, h, function (e, t) {
            return {connectDragPreview: e.dragPreview(), connectDragSource: e.dragSource(), isDragging: t.isDragging()}
        })(class extends s.Component {
            constructor(e) {
                super(e), this.enter = (() = > {this.setState({hover: !0})}
            ),
                this.leave = (() = > {this.setState({hover: !1})}
            ),
                this.state = {hover: !1}
            }

            render() {
                const e = this.props.classes;
                return this.props.connectDragPreview(s.createElement("div", {
                    onMouseEnter: this.enter,
                    onMouseLeave: this.leave,
                    className: this.state.hover ? e.hover : ""
                }, s.createElement(r.default, {disabled: this.props.disabled}, this.props.connectDragSource(s.createElement("div", {className: e.draggerRoot}, s.createElement(l.default, {className: this.props.disabled ? e.draggerDisabled : e.dragger}, s.createElement(d.default, null)))), s.createElement(o.default, null, u.default.extensionName[this.props.type]))))
            }
        }))
    }, pLYI: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const s = a("q1tI"), i = a("i8i4"), n = a("eO8H"), r = a("SUMQ"), l = a("r1Q0"), o = a("Eijp"), d = a("x/uv"),
            c = a("6ZaM"), u = a("P9b8"), m = a("sZWH"), h = a("9qBj"), p = a("jRni"), f = a("QeBL"), g = a("+zjq"),
            v = r.createMuiTheme({palette: {primary: l.blue, secondary: l.pink}, typography: {useNextVariants: !0}}),
            E = r.createStyles({
                sizeWarning: {
                    width: "100vw",
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }, root: {overflowY: "hidden"}
            });
        const y = u.DragDropContext(m.default)(r.withStyles(E)(class extends s.Component {
            render() {
                const e = this.props.classes;
                return s.createElement(r.MuiThemeProvider, {theme: v}, s.createElement(o.default, null), s.createElement(d.default, {smUp: !0}, s.createElement("div", {className: e.sizeWarning}, s.createElement(c.default, null, s.createElement("strong", null, "请在尺寸更大的屏幕上使用管理端")))), s.createElement(d.default, {
                    xsDown: !0,
                    className: e.root
                }, s.createElement(n.BrowserRouter, {basename: h.default.rootPath}, s.createElement(n.Switch, null, s.createElement(n.Redirect, {
                    from: "/",
                    to: "/activity/_",
                    exact: !0,
                    strict: !0
                }), s.createElement(n.Route, {
                    path: "/login",
                    exact: !0,
                    component: p.default
                }), s.createElement(n.Route, {
                    path: "/activity/:id",
                    exact: !0,
                    component: f.default
                }), s.createElement(n.Route, {component: g.default})))))
            }
        }));
        i.render(s.createElement(y, null), document.getElementById("app"))
    }, s29V: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const s = a("q1tI"), i = a("SUMQ"), n = a("r1Q0"), r = a("EHL7"), l = a("NABS");
        t.default = i.withStyles(e = > ({hover: {backgroundColor: n.grey[100]}, divider: {width: "100%"}})
    )
        (class extends s.Component {
            constructor(e) {
                super(e), this.handleEnter = (() = > {this.setState({hover: !0})}
            ),
                this.handleLeave = (() = > {this.setState({hover: !1})}
            ),
                this.state = {hover: !1}
            }

            render() {
                const e = this.props.classes;
                return s.createElement("div", null, s.createElement(l.default, {
                    onMouseEnter: this.handleEnter,
                    onMouseLeave: this.handleLeave,
                    className: this.state.hover ? e.hover : ""
                }, s.createElement("div", {className: e.divider}, s.createElement(r.default, null))))
            }
        })
    }, vWoE: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const s = a("q1tI"), i = a("EUZL"), n = a("SUMQ"), r = a("1IiC"), l = a("pPbJ"), o = a("nwgO"), d = a("6ZaM"),
            c = a("FrwU"), u = a("8C4M"), m = a("8q3U"), h = a("xSPK"), p = a("dMKM"), f = a("ax+9"), g = a("9qBj"),
            v = a("c+yx");
        t.default = n.withStyles(e = > ({
            root: {margin: e.spacing.unit, padding: e.spacing.unit},
            titleContent: {display: "flex", width: "100%", alignItems: "center"},
            title: {flexGrow: 1},
            publisher: {color: e.palette.grey[500]},
            buttons: {display: "flex", width: "100%", justifyContent: "space-between"}
        })
    )
        (class extends s.Component {
            constructor() {
                super(...arguments
            ),
                this.go = (e = > {this.props.go(this.props.activity.id)}
            ),
                this.setStatus = (e = > {fetch(`${g.default.hostName}/admin/activity/${this.props.activity.id}/status`, {
                    method: "PUT",
                    mode: g.default.corsType,
                    cache: "no-cache",
                    headers: {"Content-type": "application/json; charset=UTF-8"},
                    body: JSON.stringify({status: e})
                }
            ).
                then(e = > {if(
                !e.ok
            )
                throw e.status;
                this.props.refresh()
            }).
                catch(e = > {console.log(e), alert("无法修改状态\n请联系科协技术部"
            )
            })
            }),
                this.publish = (() = > {this.setStatus(1)}
            ),
                this.pasue = (() = > {this.setStatus(2)}
            ),
                this.resume = (() = > {this.setStatus(1)}
            ),
                this.stop = (() = > {this.setStatus(3)}
            ),
                this.delete = (() = > {fetch(`${g.default.hostName}/admin/activity/${this.props.activity.id}`, {
                    method: "DELETE",
                    mode: g.default.corsType,
                    cache: "no-cache"
                }
            ).
                then(e = > {if(
                !e.ok
            )
                throw e.status;
                return e.json()
            }).
                then(e = > {"" == e.reason ? this.props.refresh(() = > {
                    this
                    .props.currentId === this.props.activity.id && this.props.go("_")
                }
            ):
                alert(e.reason)
            }).
                catch(e = > {console.log(e), alert("无法删除报名\n请联系科协技术部"
            )
            })
            }),
                this.download = (() = > {fetch(`${g.default.hostName}/admin/activity/${this.props.activity.id}/applicant`, {
                    mode: g.default.corsType,
                    cache: "no-cache"
                }
            ).
                then(e = > {if(
                !e.ok
            )
                throw e.status;
                return e.json()
            }).
                then(e = > {let t = i.utils.book_new(), a = i.utils.json_to_sheet(e.map(e = > v.transToXlsx(e))
            )
                ;i.utils.book_append_sheet(t, a, this.props.activity.name + "报名表"), i.writeFile(t, this.props.activity.name + "报名表.xlsx")
            }).
                catch(e = > {console.log(e), alert("未能获取报名数据\n请联系科协技术部"
            )
            })
            })
            }

            render() {
                const e = this.props.classes;
                return s.createElement(l.default, {className: e.root}, s.createElement("div", {className: e.titleContent}, s.createElement(d.default, {
                    variant: "h6",
                    className: e.title
                }, this.props.activity.name), s.createElement(o.default, {
                    title: "详情",
                    placement: "bottom"
                }, s.createElement(r.default, {onClick: this.go}, s.createElement(u.default, null)))), s.createElement(d.default, {className: e.publisher}, "发布者: ", this.props.activity.publisher), null != this.props.activity.startTime && s.createElement(d.default, null, "报名开始时间: ", s.createElement("br", null), this.props.activity.startTime), null != this.props.activity.endTime && s.createElement(d.default, null, "报名截止时间: ", s.createElement("br", null), this.props.activity.endTime), s.createElement("div", {className: e.buttons}, 0 == this.props.activity.status && s.createElement(o.default, {
                    title: "发布",
                    placement: "top"
                }, s.createElement(r.default, {onClick: this.publish}, s.createElement(h.default, null))), 1 == this.props.activity.status && s.createElement(o.default, {
                    title: "暂停报名",
                    placement: "top"
                }, s.createElement(r.default, {onClick: this.pasue}, s.createElement(m.default, null))), 2 == this.props.activity.status && s.createElement(o.default, {
                    title: "继续报名",
                    placement: "top"
                }, s.createElement(r.default, {onClick: this.resume}, s.createElement(h.default, null))), this.props.activity.status > 0 && this.props.activity.status < 3 && s.createElement(o.default, {
                    title: "终止报名",
                    placement: "top"
                }, s.createElement(r.default, {onClick: this.stop}, s.createElement(f.default, null))), 3 == this.props.activity.status && s.createElement(o.default, {
                    title: "下载报名结果",
                    placement: "top"
                }, s.createElement(r.default, {onClick: this.download}, s.createElement(p.default, null))), (0 == this.props.activity.status || 3 == this.props.activity.status) && s.createElement(o.default, {
                    title: "删除",
                    placement: "top"
                }, s.createElement("div", null, s.createElement(r.default, {
                    onClick: this.delete,
                    disabled: 0 == this.props.activity.status && this.props.currentId === this.props.activity.id
                }, s.createElement(c.default, null))))))
            }
        })
    }, zQ7x: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const s = a("q1tI"), i = a("SUMQ"), n = a("3sja"), r = a("ofFZ"),
            l = ["text", "number", "radio", "checkbox", "date", "textarea", "group"],
            o = ["personName", "teamName", "sex", "nation", "political", "studentNumber", "phone", "qq", "email", "idcard", "GPA", "rank"];
        t.default = i.withStyles(e = > ({})
    )
        (class extends s.Component {
            render() {
                return s.createElement("div", null, s.createElement(n.default, {
                    name: "基础内容",
                    disabled: this.props.disabled
                }, l.map(e = > s.createElement(r.default, {
                    key: e,
                    disabled: this.props.disabled,
                    type: e,
                    removeNewItem: this.props.removeNewItem
                }))), s.createElement(n.default, {
                    name: "扩展内容",
                    disabled: this.props.disabled
                }, o.map(e = > s.createElement(r.default, {
                    key: e,
                    disabled: this.props.disabled,
                    type: e,
                    removeNewItem: this.props.removeNewItem
                }))
            ))
            }
        })
    }
});