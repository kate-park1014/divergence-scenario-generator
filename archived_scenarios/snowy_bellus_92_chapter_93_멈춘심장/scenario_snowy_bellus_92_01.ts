export const scenario_snowy_bellus_92_01 = {
	"scenario_id": "snowy_bellus_92_01",
	"order": 1,
	"act": "intro",
	"theme": "snowy",
	"actors": {
		"eira": {
			"id": "mon_0c37c014-b5ca-4f2f-ad03-5d393e5b2eb1",
			"name": {
				"korean": "에이라",
				"english": "Eira",
				"japanese": "エイラ",
				"chinese": "艾拉",
				"french": "Eira",
				"spanish": "Eira",
				"vietnamese": "Eira",
				"thai": "ไอรา",
				"hindi": "ऐरा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8e2970b7-bcb1-4b1c-6bf0-93106b373500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/0ca1ec09-a624-450f-054a-b98de58bdb00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "모든 것이 정지한 도시. 얼어붙은 시간 속에 박제된 사람들의 잔상.",
						"english": "A city where everything is frozen. The afterimages of people preserved in frozen time.",
						"japanese": "全てが停止した都市。凍てついた時間の中に閉じ込められた人々の残像。",
						"chinese": "一切都静止的城市。人们的残影被定格在冻结的时间里。",
						"french": "Une ville où tout est figé. Les rémanences des personnes préservées dans le temps gelé.",
						"spanish": "Una ciudad donde todo está congelado. Las imágenes residuales de personas preservadas en el tiempo congelado.",
						"vietnamese": "Một thành phố nơi mọi thứ đều đứng yên. Hình ảnh tàn dư của con người được lưu giữ trong thời gian đóng băng.",
						"thai": "เมืองที่ทุกสิ่งหยุดนิ่ง ภาพติดตาของผู้คนที่ถูกเก็บรักษาไว้ในกาลเวลาที่หยุดนิ่ง",
						"hindi": "एक ऐसा शहर जहाँ सब कुछ जम गया है। जमे हुए समय में संरक्षित लोगों की अवशेष छवियाँ।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "정말… 멈춰버렸어.",
						"english": "It really… stopped.",
						"japanese": "本当に…止まってしまった。",
						"chinese": "真的…停了。",
						"french": "C'est vraiment… arrêté.",
						"spanish": "Realmente… se detuvo.",
						"vietnamese": "Thật sự… đã ngừng lại rồi.",
						"thai": "มัน…หยุดไปจริงๆ",
						"hindi": "यह सचमुच… रुक गया।"
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"action": "enter",
					"type": "direction",
					"speaker": "eira",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "잊힌 기록에 따르면, 이곳은 가장 찬란한 순간에 갇혔다고 해.",
						"english": "According to forgotten records, this place is trapped in its most glorious moment.",
						"japanese": "忘れられた記録によると、ここは最も輝かしい瞬間に閉じ込められたらしい。",
						"chinese": "根据遗忘的记载，这里被困于最辉煌的时刻。",
						"french": "Selon des registres oubliés, cet endroit est piégé dans son moment le plus glorieux.",
						"spanish": "Según registros olvidados, este lugar está atrapado en su momento más glorioso.",
						"vietnamese": "Theo những ghi chép bị lãng quên, nơi đây bị mắc kẹt trong khoảnh khắc rực rỡ nhất của nó.",
						"thai": "ตามบันทึกที่ถูกลืม ที่นี่ถูกกักขังไว้ในห้วงเวลาที่รุ่งโรจน์ที่สุด",
						"hindi": "भूली हुई अभिलेखों के अनुसार, यह स्थान अपने सबसे शानदार पल में फँसा हुआ है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "찬란함? 고통스러워 보이는데…",
						"english": "Glorious? It looks painful…",
						"japanese": "輝かしい？苦痛に見えるけど…",
						"chinese": "辉煌？看起来很痛苦…",
						"french": "Glorieux ? Cela semble douloureux…",
						"spanish": "¿Glorioso? Parece doloroso…",
						"vietnamese": "Rực rỡ? Trông có vẻ đau đớn…",
						"thai": "รุ่งโรจน์? ดูเหมือนเจ็บปวดนะ…",
						"hindi": "शानदार? यह दर्दनाक लग रहा है…"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그게 이 세계의 규칙이야. 행복한 순간에 영원히 갇히는 것.",
						"english": "That's the rule of this world. To be forever trapped in a happy moment.",
						"japanese": "それがこの世界のルールだ。幸せな瞬間に永遠に閉じ込められること。",
						"chinese": "那是这个世界的规则。永远被困在幸福的瞬间。",
						"french": "C'est la règle de ce monde. Être éternellement piégé dans un moment de bonheur.",
						"spanish": "Esa es la regla de este mundo. Quedar atrapado para siempre en un momento feliz.",
						"vietnamese": "Đó là quy tắc của thế giới này. Bị mắc kẹt mãi mãi trong khoảnh khắc hạnh phúc.",
						"thai": "นั่นคือกฎของโลกนี้ การถูกจองจำในห้วงเวลาแห่งความสุขตลอดไป",
						"hindi": "यही इस दुनिया का नियम है। एक सुखद पल में हमेशा के लिए फँस जाना।"
					},
					"speaker": "eira",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"speaker": "eira",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "이들을 봐. 모두 웃고 있어. 마지막 순간까지.",
						"english": "Look at them. All smiling. Until their last moment.",
						"japanese": "彼らを見て。みんな笑っている。最期の瞬間まで。",
						"chinese": "看看他们。都在笑。直到最后一刻。",
						"french": "Regardez-les. Tous sourient. Jusqu'à leur dernier souffle.",
						"spanish": "Míralos. Todos sonríen. Hasta el último momento.",
						"vietnamese": "Nhìn họ kìa. Tất cả đều mỉm cười. Cho đến khoảnh khắc cuối cùng.",
						"thai": "ดูพวกเขาเหล่านั้นสิ ทุกคนยิ้มแย้ม จนถึงช่วงเวลาสุดท้าย",
						"hindi": "इन्हें देखो। सब मुस्कुरा रहे हैं। आखिरी पल तक।"
					},
					"emotion": "base",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"content": {
						"korean": "정말이네… 다들 행복한 표정이야.",
						"english": "You're right... They all look happy.",
						"japanese": "本当だ… みんな幸せそうだ。",
						"chinese": "真是… 他们都面带幸福。",
						"french": "C'est vrai... Ils ont tous l'air heureux.",
						"spanish": "Es verdad... Todos tienen una expresión feliz.",
						"vietnamese": "Thật vậy... Ai cũng có vẻ mặt hạnh phúc.",
						"thai": "จริงด้วย... ทุกคนดูมีความสุข",
						"hindi": "सच में... सब खुश लग रहे हैं।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "시간이 멈춘 자들은 가장 행복했던 순간에 영원히 박제돼. 기록은 그렇게 전해.",
						"english": "Those whose time stopped are eternally preserved in their happiest moment. The records say so.",
						"japanese": "時が止まった者たちは、最も幸せだった瞬間に永遠に封じられる。記録はそう伝えている。",
						"chinese": "时间停滞者，永远定格在他们最幸福的瞬间。记录是这么说的。",
						"french": "Ceux dont le temps s'est arrêté sont éternellement figés dans leur moment le plus heureux. Les archives le rapportent.",
						"spanish": "Aquellos cuyo tiempo se detuvo están eternamente preservados en su momento más feliz. Los registros lo dicen.",
						"vietnamese": "Những người bị thời gian ngưng đọng đều được giữ lại vĩnh viễn trong khoảnh khắc hạnh phúc nhất của họ. Sách vở ghi lại như vậy.",
						"thai": "ผู้ที่เวลาหยุดนิ่งจะถูกเก็บรักษาไว้ในห้วงเวลาที่มีความสุขที่สุดตลอดไป บันทึกกล่าวไว้เช่นนั้น",
						"hindi": "जिनका समय रुक गया, वे अपने सबसे खुशहाल पल में हमेशा के लिए जम गए हैं। रिकॉर्ड्स ऐसा ही बताते हैं।"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이게… 구원이야?",
						"english": "Is this... salvation?",
						"japanese": "これが… 救済なのか？",
						"chinese": "这就是… 救赎吗？",
						"french": "Est-ce... le salut ?",
						"spanish": "¿Es esto... la salvación?",
						"vietnamese": "Đây có phải... là sự cứu rỗi?",
						"thai": "นี่คือ... การไถ่บาปหรือเปล่า?",
						"hindi": "क्या यह... मुक्ति है?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "…어쩌면, 누군가는 그렇게 믿었을지도 몰라.",
						"english": "...Perhaps, someone might have believed so.",
						"japanese": "…もしかしたら、誰かはそう信じていたのかもしれない。",
						"chinese": "…也许，有人会这样相信。",
						"french": "...Peut-être que quelqu'un y a cru.",
						"spanish": "...Quizás, alguien lo creyó así.",
						"vietnamese": "...Có lẽ, ai đó đã tin như vậy.",
						"thai": "...บางที ใครบางคนอาจจะเชื่ออย่างนั้น",
						"hindi": "...शायद, किसी ने ऐसा ही माना होगा।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "eira",
					"spot": [
						4,
						2
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이건… 고대 룬 문자야. 시간을 멈추는 주술.",
						"english": "This is... ancient runic script. A spell to stop time.",
						"japanese": "これは… 古代のルーン文字だ。時間を止める呪文。",
						"chinese": "这是… 古代符文。停止时间的咒语。",
						"french": "C'est... une ancienne rune. Un sort pour arrêter le temps.",
						"spanish": "Esto es... escritura rúnica antigua. Un hechizo para detener el tiempo.",
						"vietnamese": "Đây là... chữ rune cổ đại. Một câu thần chú để ngưng đọng thời gian.",
						"thai": "นี่คือ... อักษรรูนโบราณ คาถาหยุดเวลา",
						"hindi": "यह... प्राचीन रूण लिपि है। समय को रोकने का जादू।"
					},
					"speaker": "eira",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "누가 이런 짓을….",
						"english": "Who would do such a thing...?",
						"japanese": "誰がこんなことを…。",
						"chinese": "谁会做这种事…？",
						"french": "Qui ferait une chose pareille...?",
						"spanish": "¿Quién haría algo así...?",
						"vietnamese": "Ai lại làm chuyện này chứ...?",
						"thai": "ใครกันที่ทำเรื่องแบบนี้...?",
						"hindi": "ऐसा किसने किया...?"
					},
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "기록엔 '벨루스'라는 이름이 자주 나와. 시간을 지배한 자…",
						"english": "The name 'Bellus' often appears in records. The one who mastered time...",
						"japanese": "記録には「ベルス」という名前がよく出てくる。時間を支配した者…",
						"chinese": "记录中经常出现“贝鲁斯”这个名字。支配时间的人…",
						"french": "Le nom 'Bellus' apparaît souvent dans les registres. Celui qui maîtrisait le temps...",
						"spanish": "El nombre 'Bellus' aparece a menudo en los registros. El que dominó el tiempo...",
						"vietnamese": "Tên 'Bellus' thường xuyên xuất hiện trong các ghi chép. Kẻ đã điều khiển thời gian...",
						"thai": "ชื่อ 'เบลลัส' ปรากฏบ่อยครั้งในบันทึก ผู้ที่ควบคุมเวลา...",
						"hindi": "रिकॉर्ड्स में 'बेलुस' नाम अक्सर आता है। समय का स्वामी..."
					},
					"speaker": "eira",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "벨루스… 그게 대체 누구야?",
						"english": "Bellus... Who exactly is that?",
						"japanese": "ベルス… それは一体誰なんだ？",
						"chinese": "贝鲁斯… 那到底是谁？",
						"french": "Bellus... Qui est-ce exactement ?",
						"spanish": "Bellus... ¿Quién es ese, exactamente?",
						"vietnamese": "Bellus... Rốt cuộc đó là ai?",
						"thai": "เบลลัส... เขาคือใครกันแน่?",
						"hindi": "बेलुस... वह आखिर कौन है?"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "시간이 멈춘 자들의 고통은 끝이 없어. 움직일 수도, 변할 수도 없어.",
						"english": "The suffering of those whose time has stopped is endless. They can neither move nor change.",
						"japanese": "時が止まった者たちの苦痛は終わりがない。動くことも、変わることもできない。",
						"chinese": "时间停滞者的痛苦是无止境的。他们无法移动，也无法改变。",
						"french": "La souffrance de ceux dont le temps s'est arrêté est sans fin. Ils ne peuvent ni bouger ni changer.",
						"spanish": "El sufrimiento de aquellos cuyo tiempo se ha detenido es interminable. No pueden moverse ni cambiar.",
						"vietnamese": "Nỗi đau của những người bị thời gian ngưng đọng là vô tận. Họ không thể di chuyển, cũng không thể thay đổi.",
						"thai": "ความทุกข์ทรมานของผู้ที่เวลาหยุดนิ่งนั้นไม่มีที่สิ้นสุด พวกเขาไม่สามารถเคลื่อนไหวหรือเปลี่ยนแปลงได้",
						"hindi": "जिनका समय रुक गया है, उनका दुख अनंत है। वे न हिल सकते हैं और न बदल सकते हैं।"
					},
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"content": {
						"korean": "우리가 이걸 멈춰야 해.",
						"english": "We must stop this.",
						"japanese": "私たちがこれを止めなければならない。",
						"chinese": "我们必须阻止这一切。",
						"french": "Nous devons arrêter ça.",
						"spanish": "Tenemos que detener esto.",
						"vietnamese": "Chúng ta phải ngăn chặn điều này.",
						"thai": "เราต้องหยุดมัน",
						"hindi": "हमें इसे रोकना होगा।"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "그러려면 이 모든 것을 만든 존재를 마주해야 할 거야.",
						"english": "To do that, we'll have to face the one who created all this.",
						"japanese": "そのためには、これらすべてを創り出した存在と向き合わなければならないだろう。",
						"chinese": "为此，我们必须面对创造这一切的存在。",
						"french": "Pour cela, nous devrons affronter celui qui a créé tout ça.",
						"spanish": "Para eso, tendremos que enfrentarnos al ser que creó todo esto.",
						"vietnamese": "Để làm được điều đó, chúng ta sẽ phải đối mặt với kẻ đã tạo ra tất cả những thứ này.",
						"thai": "การจะทำเช่นนั้นได้ เราต้องเผชิญหน้ากับผู้ที่สร้างสิ่งเหล่านี้ทั้งหมด",
						"hindi": "ऐसा करने के लिए, हमें उस सत्ता का सामना करना होगा जिसने यह सब बनाया है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "저 깊은 곳에서, 거대한 시계태엽 소리가 울렸다. 세계가 요동쳤다.",
						"english": "From the depths, a colossal clockwork sound reverberated. The world trembled.",
						"japanese": "その深奥から、巨大な時計仕掛けの音が響き渡った。世界は揺れた。",
						"chinese": "在那深处，巨大的发条声回荡。世界为之震颤。",
						"french": "Des profondeurs, un colossal bruit d'engrenage résonna. Le monde trembla.",
						"spanish": "Desde lo más profundo, un colosal sonido de relojería retumbó. El mundo tembló.",
						"vietnamese": "Từ sâu thẳm, âm thanh của một cỗ máy đồng hồ khổng lồ vang vọng. Thế giới rung chuyển.",
						"thai": "จากห้วงลึก เสียงกลไกนาฬิกาขนาดมหึมาดังก้อง โลกสั่นสะเทือน",
						"hindi": "उस गहराई से, एक विशाल घड़ी की कल का शोर गूंजा। दुनिया कांप उठी।"
					},
					"emotion": "base"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "…내가 틀렸단 말인가? 하지만… 영원한 고통은 멈춰야 했다.",
						"english": "...Was I wrong? But... eternal suffering had to end.",
						"japanese": "…私が間違っていたというのか？しかし…永遠の苦痛は終わらせねばならなかった。",
						"chinese": "……我错了吗？但是……永恒的痛苦必须停止。",
						"french": "...Me serais-je trompé ? Mais... la souffrance éternelle devait cesser.",
						"spanish": "...¿Me equivoqué? Pero... el sufrimiento eterno tenía que terminar.",
						"vietnamese": "...Ta đã sai sao? Nhưng... nỗi đau vĩnh cửu phải chấm dứt.",
						"thai": "...ข้าผิดพลาดหรือ? แต่... ความทุกข์ทรมานชั่วนิรันดร์ต้องหยุดลง",
						"hindi": "...क्या मैं गलत था? लेकिन... अनंत पीड़ा को रुकना ही था।"
					},
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…누군가는 그 고통을 이겨내고 살아가야 해.",
						"english": "...Someone has to overcome that suffering and live on.",
						"japanese": "…誰かがその苦痛を乗り越え、生きていかねばならない。",
						"chinese": "……总有人要克服那痛苦，继续活下去。",
						"french": "...Quelqu'un doit surmonter cette souffrance et continuer à vivre.",
						"spanish": "...Alguien tiene que superar ese sufrimiento y seguir viviendo.",
						"vietnamese": "...Ai đó phải vượt qua nỗi đau đó và tiếp tục sống.",
						"thai": "...ใครบางคนต้องเอาชนะความทุกข์ทรมานนั้นแล้วใช้ชีวิตต่อไป",
						"hindi": "...किसी को उस पीड़ा से उबरकर जीना होगा।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"action": "enter",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"speaker": "eira",
					"duration_ms": 500
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "이 조각… 벨루스에 대한 단서가 더 있어. 이대로는 안 돼.",
						"english": "This fragment... there are more clues about Bellus. It can't end like this.",
						"japanese": "この断片…ベルスに関する手がかりがまだある。このままではいけない。",
						"chinese": "这碎片……还有更多关于贝鲁斯的线索。不能就这样结束。",
						"french": "Ce fragment... il y a plus d'indices sur Bellus. Ça ne peut pas se terminer comme ça.",
						"spanish": "Este fragmento... hay más pistas sobre Bellus. No puede terminar así.",
						"vietnamese": "Mảnh vỡ này... có thêm manh mối về Bellus. Không thể kết thúc như thế này được.",
						"thai": "ชิ้นส่วนนี้... มีเบาะแสเกี่ยวกับเบลลัสอีก ไม่ได้การล่ะ",
						"hindi": "यह टुकड़ा... बेलुस के बारे में और सुराग हैं। ऐसे नहीं चल सकता।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "단서는 벨루스의 진정한 동기를 가리키고 있었다. 다음 행선지는 '과거의 왜곡된 메아리'.",
						"english": "The clues pointed to Bellus's true motives. Our next destination: 'Distorted Echoes of the Past'.",
						"japanese": "手がかりはベルスの真の動機を指し示していた。次の目的地は「過去の歪んだ残響」。",
						"chinese": "线索指向了贝尔斯的真正动机。下一站是“过去扭曲的回响”。",
						"french": "Les indices révélaient les véritables motivations de Bellus. Notre prochaine destination : « Les échos distordus du passé ».",
						"spanish": "Las pistas señalaban los verdaderos motivos de Bellus. Nuestro próximo destino: \"Ecos distorsionados del pasado\".",
						"vietnamese": "Manh mối chỉ ra động cơ thực sự của Bellus. Điểm đến tiếp theo của chúng ta: 'Tiếng Vang Biến Dạng Của Quá Khứ'.",
						"thai": "เบาะแสชี้ไปที่แรงจูงใจที่แท้จริงของเบลลัส จุดหมายต่อไปของเรา: 'เสียงสะท้อนบิดเบือนจากอดีต'",
						"hindi": "सुराग बेलस के असली इरादों की ओर इशारा कर रहे थे। हमारी अगली मंजिल: 'अतीत की विकृत प्रतिध्वनियाँ'।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "시간의 도시 가장 깊은 곳, 거대한 존재가 모습을 드러냈다.",
						"english": "In the deepest part of the City of Time, a colossal entity revealed itself.",
						"japanese": "時の都の最深部で、巨大な存在が姿を現した。",
						"chinese": "在时间之城的最深处，一个巨大的存在现身了。",
						"french": "Au plus profond de la Cité du Temps, une entité colossale se révéla.",
						"spanish": "En lo más profundo de la Ciudad del Tiempo, una entidad colosal se reveló.",
						"vietnamese": "Ở nơi sâu thẳm nhất của Thành phố Thời gian, một thực thể khổng lồ đã xuất hiện.",
						"thai": "ในส่วนลึกที่สุดของนครแห่งกาลเวลา สิ่งมีชีวิตขนาดมหึมาได้ปรากฏตัวขึ้น",
						"hindi": "समय के शहर के सबसे गहरे हिस्से में, एक विशाल सत्ता प्रकट हुई।"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "…침입자들. 감히 멈춘 시간을 깨우려 하는가?",
						"english": "...Intruders. Dare you awaken the stopped time?",
						"japanese": "…侵入者たち。あえて止まった時間を呼び覚まそうとするか？",
						"chinese": "……入侵者。竟敢唤醒停滞的时间？",
						"french": "...Intrus. Osez-vous réveiller le temps arrêté ?",
						"spanish": "...Intrusos. ¿Osáis despertar el tiempo detenido?",
						"vietnamese": "Với những kẻ xâm nhập, dám đánh thức thời gian đã ngừng lại sao?",
						"thai": "...ผู้บุกรุก กล้าดียังไงมาปลุกเวลาที่หยุดนิ่ง?",
						"hindi": "...घुसपैठियों। क्या तुम रुके हुए समय को जगाने की हिम्मत करते हो?"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "네가 이 모든 걸 만들었군!",
						"english": "You made all of this!",
						"japanese": "お前がこれら全てを創ったのか！",
						"chinese": "这一切都是你创造的！",
						"french": "C'est toi qui as créé tout ça !",
						"spanish": "¡Tú creaste todo esto!",
						"vietnamese": "Ngươi đã tạo ra tất cả những thứ này!",
						"thai": "แกเป็นคนสร้างทั้งหมดนี่!",
						"hindi": "तुमने यह सब बनाया है!"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "나는 이 세계를 구원했다. 너희는 이 완벽한 평화를 망치려 해.",
						"english": "I saved this world. You seek to ruin this perfect peace.",
						"japanese": "私がこの世界を救ったのだ。お前たちはこの完璧な平和を台無しにしようとしている。",
						"chinese": "我拯救了这个世界。而你们，却想破坏这完美的和平。",
						"french": "J'ai sauvé ce monde. Vous cherchez à gâcher cette paix parfaite.",
						"spanish": "Yo salvé este mundo. Vosotros buscáis arruinar esta paz perfecta.",
						"vietnamese": "Ta đã cứu thế giới này. Các ngươi đang cố gắng phá hoại sự bình yên hoàn hảo này.",
						"thai": "ข้าได้กอบกู้โลกนี้ไว้ พวกเจ้าพยายามจะทำลายความสงบสุขที่สมบูรณ์แบบนี้",
						"hindi": "मैंने इस दुनिया को बचाया है। तुम इस उत्तम शांति को बर्बाद करने की कोशिश कर रहे हो।"
					},
					"speaker": "random_boss",
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거대한 시계태엽이 다시 돌고, 탐험대는 얼어붙었다.",
						"english": "The colossal gears turned again, and the expedition froze.",
						"japanese": "巨大な歯車が再び回り、探検隊は凍りついた。",
						"chinese": "巨大的齿轮再次转动，探险队被冻结了。",
						"french": "Les rouages colossaux se remirent en mouvement, et l'expédition fut figée.",
						"spanish": "Los colosales engranajes giraron de nuevo, y la expedición quedó congelada.",
						"vietnamese": "Những bánh răng khổng lồ quay lại, và đoàn thám hiểm bị đóng băng.",
						"thai": "เฟืองขนาดมหึมาหมุนอีกครั้ง และคณะสำรวจก็หยุดนิ่ง",
						"hindi": "विशालकाय गियर फिर से घूमने लगे, और अभियान जम गया।"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…이게 너희의 영원한 평화다.",
						"english": "...This is your eternal peace.",
						"japanese": "…これが、お前たちの永遠の平和だ。",
						"chinese": "……这就是你们永恒的和平。",
						"french": "...Voici votre paix éternelle.",
						"spanish": "...Esta es vuestra paz eterna.",
						"vietnamese": "...Đây là sự bình yên vĩnh cửu của các ngươi.",
						"thai": "...นี่คือความสงบสุขชั่วนิรันดร์ของเจ้า",
						"hindi": "...यही तुम्हारी शाश्वत शांति है।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…아직 끝나지 않았어. 시간을 되돌릴 거야.",
						"english": "...It's not over yet. I'll turn back time.",
						"japanese": "…まだ終わっていない。時間を巻き戻す。",
						"chinese": "……还没结束。我会让时间倒流。",
						"french": "...Ce n'est pas encore fini. Je vais remonter le temps.",
						"spanish": "...Aún no ha terminado. Retrocederé el tiempo.",
						"vietnamese": "...Chưa kết thúc đâu. Ta sẽ quay ngược thời gian.",
						"thai": "...ยังไม่จบ ฉันจะย้อนเวลากลับไป",
						"hindi": "...यह अभी खत्म नहीं हुआ है। मैं समय को वापस मोड़ दूँगा।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"시간이 멈춘 도시. 가장 아름다운 순간에 박제된 세계.",
			"탐험대는 유일하게 움직이는 존재다.",
			"폐허 속, 멈춘 시간을 다시 흐르게 할 단서를 찾아야 한다.",
			"그러나 거대한 시계태엽 소리가 울리고 —",
			"잊힌 역사를 기록하는 자, 에이라가 첫 조각을 발견했다."
		],
		"english": [
			"A city where time stands still. A world preserved in its most beautiful moment.",
			"The expedition team is the only one that moves.",
			"Amidst the ruins, we must find clues to make time flow again.",
			"But then, the sound of a giant clockwork echoes—",
			"Aira, the one who records forgotten history, found the first piece."
		],
		"japanese": [
			"時が止まった都市。最も美しい瞬間に閉じ込められた世界。",
			"探検隊だけが、唯一動く存在だ。",
			"廃墟の中、止まった時間を再び流す手がかりを見つけなければならない。",
			"しかし、巨大な時計仕掛けの音が響き渡り――",
			"忘れられた歴史を記録する者、エイラが最初の破片を発見した。"
		],
		"chinese": [
			"时间静止的城市。定格在最美瞬间的世界。",
			"探险队是唯一能移动的存在。",
			"在废墟中，必须找到让时间再次流动的线索。",
			"然而，巨大的发条声响起——",
			"记录遗忘历史之人，艾拉，发现了第一块碎片。"
		],
		"french": [
			"Une ville où le temps s'est arrêté. Un monde figé dans son plus beau moment.",
			"L'équipe d'expédition est la seule à se mouvoir.",
			"Au milieu des ruines, nous devons trouver des indices pour faire couler le temps à nouveau.",
			"Cependant, le son d'un gigantesque mécanisme d'horlogerie résonne—",
			"Aira, celle qui consigne l'histoire oubliée, a trouvé le premier fragment."
		],
		"spanish": [
			"Una ciudad donde el tiempo se detuvo. Un mundo preservado en su momento más hermoso.",
			"El equipo de expedición es el único que se mueve.",
			"Entre las ruinas, debemos encontrar pistas para que el tiempo vuelva a fluir.",
			"Sin embargo, el sonido de un gigantesco mecanismo de relojería resuena—",
			"Aira, quien registra la historia olvidada, encontró la primera pieza."
		],
		"vietnamese": [
			"Thành phố nơi thời gian ngừng lại. Một thế giới được lưu giữ trong khoảnh khắc đẹp nhất.",
			"Đội thám hiểm là những người duy nhất còn chuyển động.",
			"Giữa đống đổ nát, phải tìm ra manh mối để thời gian chảy lại.",
			"Nhưng rồi, tiếng bánh răng đồng hồ khổng lồ vang vọng—",
			"Aira, người ghi chép lịch sử lãng quên, đã tìm thấy mảnh ghép đầu tiên."
		],
		"thai": [
			"เมืองที่กาลเวลาหยุดนิ่ง โลกที่ถูกจารึกไว้ในห้วงเวลาที่งดงามที่สุด",
			"ทีมสำรวจคือสิ่งมีชีวิตเดียวที่เคลื่อนไหว",
			"ท่ามกลางซากปรักหักพัง เราต้องหาเบาะแสที่จะทำให้เวลากลับมาเดินอีกครั้ง",
			"แต่แล้ว เสียงฟันเฟืองนาฬิกาขนาดยักษ์ก็ดังก้อง—",
			"ไอรา ผู้บันทึกประวัติศาสตร์ที่ถูกลืม ได้ค้นพบชิ้นส่วนแรก"
		],
		"hindi": [
			"एक ऐसा शहर जहाँ समय रुक गया है। एक दुनिया जो अपने सबसे खूबसूरत पल में संरक्षित है।",
			"अभियान दल ही एकमात्र चलता-फिरता अस्तित्व है।",
			"खंडहरों के बीच, हमें समय को फिर से प्रवाहित करने के सुराग खोजने होंगे।",
			"लेकिन तभी, एक विशाल घड़ी की कल का शोर गूँजता है—",
			"आइरा, भूली हुई इतिहास की रिकॉर्डर, ने पहला टुकड़ा खोजा।"
		]
	}
} as const;
