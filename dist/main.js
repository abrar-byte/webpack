(() => {
  var e = {
      828: (e, t, r) => {
        const o = r(627);
        e.exports = class {
          constructor() {
            this.error = document.querySelector("#error");
          }
          tampilkanErrorPenjumlahan = (e, t) => {
            const r = e.reduce(
              (e, r, n) => (o(t[n]) ? e + "" : e + `${r} itu bukan angka! `),
              "Silahkan masukkan angka yang benar: "
            );
            this.error.classList.remove("d-none"), (this.error.innerText = r);
          };
          sembunyikanError = () => this.error.classList.add("d-none");
        };
      },
      370: (e, t, r) => {
        const o = r(627),
          n = r(407);
        e.exports = (e, t, r) => {
          e.sembunyikanError(),
            t.onClick(() => {
              e.sembunyikanError();
              const r = t.getInput(),
                s = n(...r);
              if (o(...s)) {
                const [e, r] = s;
                t.setResult(e, r);
              } else t.setResult(""), e.tampilkanErrorPenjumlahan(r, s);
            }),
            r.onClick(() => {
              fetch("https://candaan-api.vercel.app/api/text/random")
                .then((e) => e.json())
                .then((e) => {
                  r.setModal(e.data);
                });
            });
        };
      },
      921: (e) => {
        e.exports = class {
          constructor() {
            (this.operand1 = document.querySelector("#operand1")),
              (this.operand2 = document.querySelector("#operand2")),
              (this.tombolTambah = document.querySelector("#tombol-tambah")),
              (this.hasil = document.querySelector("#hasil"));
          }
          getInput() {
            return [this.operand1.value, this.operand2.value];
          }
          setResult(e, t) {
            this.hasil.innerText = e + t;
          }
          onClick(e) {
            this.tombolTambah.addEventListener("click", e);
          }
        };
      },
      438: (e) => {
        e.exports = class {
          constructor() {
            (this.tombolJokes = document.querySelector("#jokes-receh")),
              (this.modalBody = document.querySelector(".modal-body"));
          }
          setModal(e) {
            this.modalBody.innerHTML = e;
          }
          onClick(e) {
            this.tombolJokes.addEventListener("click", e);
          }
        };
      },
      627: (e) => {
        e.exports = (...e) => e.every((e) => "number" == typeof e && !isNaN(e));
      },
      407: (e) => {
        e.exports = (...e) => e.map((e) => parseInt(e));
      },
    },
    t = {};
  function r(o) {
    var n = t[o];
    if (void 0 !== n) return n.exports;
    var s = (t[o] = { exports: {} });
    return e[o](s, s.exports, r), s.exports;
  }
  (() => {
    const e = r(370),
      t = r(828),
      o = r(921),
      n = r(438);
    e(new t(), new o(), new n());
  })();
})();
