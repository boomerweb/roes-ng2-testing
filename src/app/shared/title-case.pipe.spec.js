"use strict";
var title_case_pipe_1 = require('./title-case.pipe');
describe('TitleCasePipe', function () {
    // This pipe is a pure, stateless function so no need for BeforeEach
    var pipe = new title_case_pipe_1.TitleCasePipe();
    it('transforms "abc" to "Abc"', function () {
        expect(pipe.transform('abc')).toBe('Abc');
    });
    it('transforms "abc def" to "Abc Def"', function () {
        expect(pipe.transform('abc def')).toBe('Abc Def');
    });
    // ... more tests ...
    it('leaves "Abc Def" unchanged', function () {
        expect(pipe.transform('Abc Def')).toBe('Abc Def');
    });
    it('transforms "abc-def" to "Abc-def"', function () {
        expect(pipe.transform('abc-def')).toBe('Abc-def');
    });
    it('transforms "   abc   def" to "   Abc   Def" (preserves spaces) ', function () {
        expect(pipe.transform('   abc   def')).toBe('   Abc   Def');
    });
});
//# sourceMappingURL=title-case.pipe.spec.js.map