const fs = require('fs');
const path = require('path');

const walkSync = function(dir, filelist = []) {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    try {
      filelist = walkSync(dirFile, filelist);
    } catch (err) {
      if (err.code === 'ENOTDIR' || err.code === 'EBADF') filelist = [...filelist, dirFile];
    }
  });
  return filelist;
};

const files = walkSync('./src/components').filter(f => f.endsWith('.tsx'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Replace custom gradients with flat primary/secondary
  content = content.replace(/\bbg-gradient-to-[a-z]+\b/g, 'bg-primary');
  content = content.replace(/\bfrom-[a-zA-Z0-9\/\[\]\-\.\#]+\b/g, '');
  content = content.replace(/\bvia-[a-zA-Z0-9\/\[\]\-\.\#]+\b/g, '');
  content = content.replace(/\bto-[a-zA-Z0-9\/\[\]\-\.\#]+\b/g, '');
  
  // Replace custom colors with theme colors
  content = content.replace(/\btext-amber-[0-9]+\b/g, 'text-accent');
  content = content.replace(/\bfill-amber-[0-9]+\b/g, 'fill-accent');
  content = content.replace(/\btext-blue-[0-9]+\b/g, 'text-primary');
  content = content.replace(/\bbg-blue-[0-9]+\b/g, 'bg-primary');
  content = content.replace(/\btext-orange-[0-9]+\b/g, 'text-primary');
  content = content.replace(/\bbg-orange-[0-9]+\b/g, 'bg-primary');
  content = content.replace(/\btext-slate-[0-9]+\b/g, 'text-muted-foreground');
  content = content.replace(/\bbg-slate-[0-9]+\b/g, 'bg-muted');
  content = content.replace(/\bborder-slate-[0-9]+\b/g, 'border-border');
  content = content.replace(/\btext-gray-[0-9]+\b/g, 'text-muted-foreground');
  content = content.replace(/\bbg-gray-[0-9]+\b/g, 'bg-muted');
  content = content.replace(/\bborder-gray-[0-9]+\b/g, 'border-border');

  // Replace brand-secondary with secondary
  content = content.replace(/\btext-brand-secondary(\/[0-9]+)?\b/g, 'text-secondary');
  content = content.replace(/\bbg-brand-secondary(\/[0-9]+)?\b/g, 'bg-secondary');
  content = content.replace(/\bborder-brand-secondary(\/[0-9]+)?\b/g, 'border-secondary');
  
  // Also clean up any extra whitespaces that might result from replacing with empty string
  content = content.replace(/  +/g, ' ');

  fs.writeFileSync(file, content);
});
console.log('Cleanup done');
