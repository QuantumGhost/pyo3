(function() {var implementors = {};
implementors["pyo3"] = ["impl&lt;'p&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"pyo3/struct.PyDowncastError.html\" title=\"struct pyo3::PyDowncastError\">PyDowncastError</a>&lt;'p&gt;&gt; for <a class=\"struct\" href=\"pyo3/struct.PyErr.html\" title=\"struct pyo3::PyErr\">PyErr</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"pyo3/struct.PyErr.html\" title=\"struct pyo3::PyErr\">PyErr</a>&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>","impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"pyo3/struct.Py.html\" title=\"struct pyo3::Py\">Py</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"pyo3/struct.PyObject.html\" title=\"struct pyo3::PyObject\">PyObject</a>","impl&lt;'a, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'a T&gt; for <a class=\"struct\" href=\"pyo3/struct.Py.html\" title=\"struct pyo3::Py\">Py</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"pyo3/trait.ToPyPointer.html\" title=\"trait pyo3::ToPyPointer\">ToPyPointer</a>,&nbsp;</span>","impl&lt;'a, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'a mut T&gt; for <a class=\"struct\" href=\"pyo3/struct.Py.html\" title=\"struct pyo3::Py\">Py</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"pyo3/trait.ToPyPointer.html\" title=\"trait pyo3::ToPyPointer\">ToPyPointer</a>,&nbsp;</span>","impl&lt;'a, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'a T&gt; for <a class=\"struct\" href=\"pyo3/struct.PyObject.html\" title=\"struct pyo3::PyObject\">PyObject</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"pyo3/trait.ToPyPointer.html\" title=\"trait pyo3::ToPyPointer\">ToPyPointer</a>,&nbsp;</span>","impl&lt;'a, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'a mut T&gt; for <a class=\"struct\" href=\"pyo3/struct.PyObject.html\" title=\"struct pyo3::PyObject\">PyObject</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"pyo3/trait.ToPyPointer.html\" title=\"trait pyo3::ToPyPointer\">ToPyPointer</a>,&nbsp;</span>","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'a <a class=\"struct\" href=\"pyo3/struct.PyType.html\" title=\"struct pyo3::PyType\">PyType</a>&gt; for &amp;'a <a class=\"struct\" href=\"pyo3/struct.PyObjectRef.html\" title=\"struct pyo3::PyObjectRef\">PyObjectRef</a>","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'a <a class=\"struct\" href=\"pyo3/struct.PyModule.html\" title=\"struct pyo3::PyModule\">PyModule</a>&gt; for &amp;'a <a class=\"struct\" href=\"pyo3/struct.PyObjectRef.html\" title=\"struct pyo3::PyObjectRef\">PyObjectRef</a>","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'a <a class=\"struct\" href=\"pyo3/struct.PyDict.html\" title=\"struct pyo3::PyDict\">PyDict</a>&gt; for &amp;'a <a class=\"struct\" href=\"pyo3/struct.PyObjectRef.html\" title=\"struct pyo3::PyObjectRef\">PyObjectRef</a>","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'a <a class=\"struct\" href=\"pyo3/struct.PyBool.html\" title=\"struct pyo3::PyBool\">PyBool</a>&gt; for &amp;'a <a class=\"struct\" href=\"pyo3/struct.PyObjectRef.html\" title=\"struct pyo3::PyObjectRef\">PyObjectRef</a>","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'a <a class=\"struct\" href=\"pyo3/struct.PyByteArray.html\" title=\"struct pyo3::PyByteArray\">PyByteArray</a>&gt; for &amp;'a <a class=\"struct\" href=\"pyo3/struct.PyObjectRef.html\" title=\"struct pyo3::PyObjectRef\">PyObjectRef</a>","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'a <a class=\"struct\" href=\"pyo3/struct.PyTuple.html\" title=\"struct pyo3::PyTuple\">PyTuple</a>&gt; for &amp;'a <a class=\"struct\" href=\"pyo3/struct.PyObjectRef.html\" title=\"struct pyo3::PyObjectRef\">PyObjectRef</a>","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'a <a class=\"struct\" href=\"pyo3/struct.PyList.html\" title=\"struct pyo3::PyList\">PyList</a>&gt; for &amp;'a <a class=\"struct\" href=\"pyo3/struct.PyObjectRef.html\" title=\"struct pyo3::PyObjectRef\">PyObjectRef</a>","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'a <a class=\"struct\" href=\"pyo3/struct.PyFloat.html\" title=\"struct pyo3::PyFloat\">PyFloat</a>&gt; for &amp;'a <a class=\"struct\" href=\"pyo3/struct.PyObjectRef.html\" title=\"struct pyo3::PyObjectRef\">PyObjectRef</a>","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'a <a class=\"struct\" href=\"pyo3/struct.PySlice.html\" title=\"struct pyo3::PySlice\">PySlice</a>&gt; for &amp;'a <a class=\"struct\" href=\"pyo3/struct.PyObjectRef.html\" title=\"struct pyo3::PyObjectRef\">PyObjectRef</a>","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'a <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt; for <a class=\"enum\" href=\"pyo3/enum.PyStringData.html\" title=\"enum pyo3::PyStringData\">PyStringData</a>&lt;'a&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">&amp;'a [</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u16.html\">u16</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt; for <a class=\"enum\" href=\"pyo3/enum.PyStringData.html\" title=\"enum pyo3::PyStringData\">PyStringData</a>&lt;'a&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">&amp;'a [</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt; for <a class=\"enum\" href=\"pyo3/enum.PyStringData.html\" title=\"enum pyo3::PyStringData\">PyStringData</a>&lt;'a&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'a <a class=\"struct\" href=\"pyo3/struct.PySet.html\" title=\"struct pyo3::PySet\">PySet</a>&gt; for &amp;'a <a class=\"struct\" href=\"pyo3/struct.PyObjectRef.html\" title=\"struct pyo3::PyObjectRef\">PyObjectRef</a>","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'a <a class=\"struct\" href=\"pyo3/struct.PyFrozenSet.html\" title=\"struct pyo3::PyFrozenSet\">PyFrozenSet</a>&gt; for &amp;'a <a class=\"struct\" href=\"pyo3/struct.PyObjectRef.html\" title=\"struct pyo3::PyObjectRef\">PyObjectRef</a>","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'a <a class=\"struct\" href=\"pyo3/struct.PyLong.html\" title=\"struct pyo3::PyLong\">PyLong</a>&gt; for &amp;'a <a class=\"struct\" href=\"pyo3/struct.PyObjectRef.html\" title=\"struct pyo3::PyObjectRef\">PyObjectRef</a>","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'a <a class=\"struct\" href=\"pyo3/struct.PyString.html\" title=\"struct pyo3::PyString\">PyString</a>&gt; for &amp;'a <a class=\"struct\" href=\"pyo3/struct.PyObjectRef.html\" title=\"struct pyo3::PyObjectRef\">PyObjectRef</a>","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'a <a class=\"struct\" href=\"pyo3/struct.PyBytes.html\" title=\"struct pyo3::PyBytes\">PyBytes</a>&gt; for &amp;'a <a class=\"struct\" href=\"pyo3/struct.PyObjectRef.html\" title=\"struct pyo3::PyObjectRef\">PyObjectRef</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()