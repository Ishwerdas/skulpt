// Note: the hacky names on int, long, float have to correspond with the
// uniquization that the compiler does for words that are reserved in
// Javascript. This is a bit hokey.
Sk.builtins = {
    "range"     : Sk.builtin.range,
    "round"     : Sk.builtin.round,
    "len"       : Sk.builtin.len,
    "min"       : Sk.builtin.min,
    "max"       : Sk.builtin.max,
    "sum"       : Sk.builtin.sum,
    "zip"       : Sk.builtin.zip,
    "abs"       : Sk.builtin.abs,
    "fabs"      : Sk.builtin.abs,	//	Added by RNL
    "ord"       : Sk.builtin.ord,
    "chr"       : Sk.builtin.chr,
    "hex"       : Sk.builtin.hex,
    "oct"       : Sk.builtin.oct,
    "bin"       : Sk.builtin.bin,
    "dir"       : Sk.builtin.dir,
    "repr"      : Sk.builtin.repr,
    "open"      : Sk.builtin.open,
    "isinstance": Sk.builtin.isinstance,
    "hash"      : Sk.builtin.hash,
    "getattr"   : Sk.builtin.getattr,
    "float_$rw$": Sk.builtin.float_,
    "int_$rw$"  : Sk.builtin.int_,
    "hasattr"   : Sk.builtin.hasattr,
    "id"        : Sk.builtin.id,

    "map"   : Sk.builtin.map,
    "filter": Sk.builtin.filter,
    "reduce": Sk.builtin.reduce,
    "sorted": Sk.builtin.sorted,

    "bool"     : Sk.builtin.bool,
    "any"      : Sk.builtin.any,
    "all"      : Sk.builtin.all,
    "enumerate": Sk.builtin.enumerate,

    "AttributeError"     : Sk.builtin.AttributeError,
    "ValueError"         : Sk.builtin.ValueError,
    "Exception"          : Sk.builtin.Exception,
    "ZeroDivisionError"  : Sk.builtin.ZeroDivisionError,
    "AssertionError"     : Sk.builtin.AssertionError,
    "ImportError"        : Sk.builtin.ImportError,
    "IndentationError"   : Sk.builtin.IndentationError,
    "IndexError"         : Sk.builtin.IndexError,
    "KeyError"           : Sk.builtin.KeyError,
    "TypeError"          : Sk.builtin.TypeError,
    "NameError"          : Sk.builtin.NameError,
    "IOError"            : Sk.builtin.IOError,
    "NotImplementedError": Sk.builtin.NotImplementedError,
    "StandardError"      : Sk.builtin.StandardError,
    "SystemExit"         : Sk.builtin.SystemExit,
    "OverflowError"      : Sk.builtin.OverflowError,
    "OperationError"     : Sk.builtin.OperationError,
    "RuntimeError"       : Sk.builtin.RuntimeError,
    "StopIteration"      : Sk.builtin.StopIteration,

    "dict"      : Sk.builtin.dict,
    "file"      : Sk.builtin.file,
    "function"  : Sk.builtin.func,
    "generator" : Sk.builtin.generator,
    "list"      : Sk.builtin.list,
    "long_$rw$" : Sk.builtin.lng,
    "method"    : Sk.builtin.method,
    "object"    : Sk.builtin.object,
    "slice"     : Sk.builtin.slice,
    "str"       : Sk.builtin.str,
    "set"       : Sk.builtin.set,
    "tuple"     : Sk.builtin.tuple,
    "type"      : Sk.builtin.type,
    "input"     : Sk.builtin.input,
    "raw_input" : Sk.builtin.raw_input,
    "setattr"   : Sk.builtin.setattr,
    /*'read': Sk.builtin.read,*/
    "jseval"    : Sk.builtin.jseval,
    "jsmillis"  : Sk.builtin.jsmillis,
    "quit"      : Sk.builtin.quit,
    "exit"      : Sk.builtin.quit,
    "print"     : Sk.builtin.print,
    "divmod"    : Sk.builtin.divmod,
    "format"    : Sk.builtin.format,
    "globals"   : Sk.builtin.globals,
    "issubclass": Sk.builtin.issubclass,
    "iter"      : Sk.builtin.iter,
    "complex"   : Sk.builtin.complex,

    // Functions below are not implemented
    "bytearray" : Sk.builtin.bytearray,
    "callable"  : Sk.builtin.callable,
    "delattr"   : Sk.builtin.delattr,
    "eval_$rn$" : Sk.builtin.eval_,
    "execfile"  : Sk.builtin.execfile,
    "frozenset" : Sk.builtin.frozenset,
    "help"      : Sk.builtin.help,
    "locals"    : Sk.builtin.locals,
    "memoryview": Sk.builtin.memoryview,
    "next"      : Sk.builtin.next_,
    "pow"       : Sk.builtin.pow,
    "reload"    : Sk.builtin.reload,
    "reversed"  : Sk.builtin.reversed,
    "super"     : Sk.builtin.superbi,
    "unichr"    : Sk.builtin.unichr,
    "vars"      : Sk.builtin.vars,
    "xrange"    : Sk.builtin.xrange,
    "apply_$rn$": Sk.builtin.apply_,
    "buffer"    : Sk.builtin.buffer,
    "coerce"    : Sk.builtin.coerce,
    "intern"    : Sk.builtin.intern,
	// Custom functins Codewizard
	"changeBG"	: Sk.builtin.changeBG,
	"addheading": Sk.builtin.addheading,
	"addSpaceship"	: Sk.builtin.addSpaceship,
	"postionEl"	: Sk.builtin.positionEl,
	"addImage" : Sk.builtin.addImage,
	"showError" : Sk.builtin.showError,
	"bounceAnimation" : Sk.builtin.bounceAnimation,
	"bounce" : Sk.builtin.bounce,
	"moveX" : Sk.builtin.moveX,
	"moveY" : Sk.builtin.moveY,
	"moveVAnimation" : Sk.builtin.moveVAnimation,
	"moveHAnimation" : Sk.builtin.moveHAnimation
};
goog.exportSymbol("Sk.builtins", Sk.builtins);
